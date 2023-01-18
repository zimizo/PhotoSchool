from django.shortcuts import render, redirect, reverse
from stud_process.models import TaskSolutions, CompletedLessons, InStudying, CompletedCourses, TestResult
from content.models import Course, Task, Lecture, VideoLecture, Test
from users.models import User


def general_page(request):
    return render(request, 'teacher_panel/general_page.html')


def check_task_list_courses(request):
    courses = []
    courses_ids = []
    message = None
    task_solutions = TaskSolutions.objects.filter(is_true=False)
    for ts in task_solutions:
        course_id = ts.task.module_id.course_id.id
        if not (course_id in courses_ids):
            courses_ids.append(course_id)
            courses.append(ts.task.module_id.course_id)
    if not courses:
        message = 'Не проверенных заданий нет'
    return render(request, 'teacher_panel/ct_list_courses.html', {'courses': courses, 'message': message})


def check_task_list_tasks(request, course_id):

    tasks = []
    tasks_ids = []
    course = Course.objects.get(pk=course_id)
    message = None
    task_solutions = TaskSolutions.objects.filter(is_true=False)
    for ts in task_solutions:
        task_id = ts.task.id
        if not (task_id in tasks_ids):
            tasks_ids.append(course_id)
            tasks.append(ts.task)
    if not tasks:
        message = 'Не проверенных заданий курсе нет'
    return render(request, 'teacher_panel/ct_list_tasks.html', {'course': course, 'tasks': tasks, 'message': message})


def check_task_solution_list(request, course_id, task_id):
    message = None
    course = Course.objects.get(pk=course_id)
    task = Task.objects.get(pk=task_id)
    task_solutions = TaskSolutions.objects.filter(is_true=False)
    if not task_solutions:
        message = 'Не проверенных заданий у данного урока нет'
    print(task_solutions)
    return render(request, 'teacher_panel/ct_list_solutions.html', {'course': course, 'task': task, 'solutions': task_solutions, 'message': message})


def check_task_solution_details(request, course_id, task_id, solution_id):
    task_solution = TaskSolutions.objects.get(pk=solution_id)
    course = Course.objects.get(pk=course_id)
    task = Task.objects.get(pk=task_id)

    if request.method == "GET":
        return render(request, 'teacher_panel/ct_solution_details.html',
                  {'course': course, 'task': task, 'solution': task_solution})
    else:
        if request.POST.get("accept"):
            task_solution.comment = request.POST.get("comment")
            task_solution.is_true = True
            task_solution.save()
            cl = CompletedLessons(user=task_solution.user, lesson_type='tk', lesson_id=task.id)
            cl.save()
            return redirect(reverse('teacher_panel:check_task_solution_list', args=[course_id, task_id]))
        elif request.POST.get("reject"):
            task_solution.comment = request.POST.get("comment")
            task_solution.is_rejected = True
            task_solution.save()
            return redirect(reverse('teacher_panel:check_task_solution_list', args=[course_id, task_id]))


def check_users_list_users(request):
    users = User.objects.filter()
    message = None
    return render(request, 'teacher_panel/cu_list_users.html',
                  {'users': users, 'message': message})


def check_users_details(request, user_id):
    user = User.objects.get(pk=user_id)
    message = None
    courses = InStudying.objects.filter(user=user)
    count_courses_pass = len(CompletedCourses.objects.filter(user=user))
    print(courses)
    if not courses:
        message = 'Пользователь еще не проходил курсы'
    return render(request, 'teacher_panel/cu_user_details.html',
                  {'user': user, 'courses': courses, 'message': message, 'count_courses_pass': count_courses_pass})


def check_users_details_course(request, user_id, course_id):
    user = User.objects.get(pk=user_id)
    course = Course.objects.get(pk=course_id)
    lessons = course.get_lessons()
    lessons_with_status = []

    for lesson in lessons:
        is_pass = CompletedLessons.objects.filter(user=user, lesson_type=lesson.content_type, lesson_id=lesson.id)
        lessons_with_status.append({'lesson': lesson, 'is_pass': bool(is_pass)})

    return render(request, 'teacher_panel/cu_course_details.html',
                  {'user': user, 'course': course, 'lessons': lessons_with_status})


content_types = {'lc': Lecture, 'ts': Test, 'tk': Task, 'vd': VideoLecture}


def check_users_details_lesson(request, user_id, course_id, lesson_type, lesson_id):
    lesson = content_types[lesson_type].objects.get(pk=lesson_id)
    user = User.objects.get(pk=user_id)
    course = Course.objects.get(pk=course_id)
    complete_lesson = CompletedLessons.objects.filter(user=user, lesson_type=lesson_type, lesson_id=lesson_id)

    if complete_lesson:
        complete_lesson = complete_lesson[0]
    else:
        complete_lesson = None
    task_solution = None
    test_result = None

    if lesson_type == 'ts':
        test_result = TestResult.objects.filter(user=user, test=lesson)

        if test_result:
            test_result = test_result[0]
        else:
            test_result = None

    elif lesson_type == 'tk':
        task_solution = TaskSolutions.objects.filter(user=user, task=lesson)

        if task_solution:
            task_solution = task_solution[0]
        else:
            task_solution = None

    return render(request, 'teacher_panel/cu_lesson_details.html',
                  {'user': user, 'course': course, 'lesson': lesson, 'complete_lesson': complete_lesson, 'task_solution': task_solution, 'test_result': test_result})

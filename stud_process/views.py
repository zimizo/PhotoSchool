from django.shortcuts import render, get_object_or_404, redirect, reverse
from content.models import Course, Test, Task, Question, Answer, Lecture, VideoLecture
from stud_process.models import TaskSolutions, TestResult, CompletedLessons, CompletedCourses
from stud_process.forms import FormTaskSolution, FormTaskSolutionWithFile
from users.models import User
import re

content_types = {'lc': Lecture, 'ts': Test, 'tk': Task, 'vd': VideoLecture}


def check_completed(course: Course, user: User):
    comp_course = CompletedCourses.objects.filter(user=user, course=course)
    if not comp_course:
        lessons = course.get_lessons()
        completed_lessons = []
        for lesson in lessons:
            if CompletedLessons.objects.filter(user=user, lesson_type=lesson.content_type, lesson_id=lesson.id):
                completed_lessons.append(lesson)
        print(len(lessons))
        print(len(completed_lessons))
        print(lessons)
        print(completed_lessons)
        if len(lessons) == len(completed_lessons):
            new_cc = CompletedCourses(user=user, course=course)
            new_cc.save()
            return new_cc
        return None
    else:
        return comp_course[0]


def study_module(request, course_id, module_id):
    course = get_object_or_404(Course, id=course_id)
    full_course = course.get_full_content()
    return render(request, 'stud_process/study.html', {'full_course': full_course})


def study(request, course_id, module_id='', lesson_type='', lesson_id=''):
    course = get_object_or_404(Course, id=course_id)
    completed_course = check_completed(course, request.user)
    full_course = course.get_full_content()

    if request.method == 'GET':
        if lesson_type == '' and lesson_id == '':
            content = {'content_type': 'c', 'content': course}
        elif lesson_type != '' and lesson_id != '':
            lesson = content_types[lesson_type].objects.get(pk=lesson_id)
            passed_lesson = CompletedLessons.objects.filter(user=request.user, lesson_type=lesson_type, lesson_id=lesson_id)
            if passed_lesson:
                passed_lesson = passed_lesson[0]
            else:
                passed_lesson = None

            content = {'content_type': 'l', 'lesson_type': lesson_type, 'content': lesson,
                       'passed_lesson': passed_lesson, 'module_id': module_id}

            if lesson_type == 'ts':
                tr = TestResult.objects.filter(user=request.user, test=lesson)
                if tr:
                    tr = tr[0]
                else:
                    tr = None
                content['test_result'] = tr

            if lesson_type == 'tk':
                ts = TaskSolutions.objects.filter(user=request.user, task=lesson)
                if ts:
                    ts = ts[0]
                else:
                    ts = None
                content['task_solution'] = ts

        else:
            content = None
        return render(request, 'stud_process/study.html', {'full_course': full_course, 'content': content, 'completed_course': completed_course, 'module_id': module_id})

    else:

        if request.POST.get("passed_lc") or request.POST.get("passed_vd"):
            new_cl = CompletedLessons(user=request.user, lesson_type=lesson_type, lesson_id=lesson_id)
            new_cl.save()

        elif request.POST.get("task"):
            task = get_object_or_404(Task, id=lesson_id)
            task_solutions = TaskSolutions.objects.filter(user=request.user, task=task)

            if task_solutions:
                task_solution = task_solutions[0]
            else:
                task_solution = None

            if task.response_is_file:
                form = FormTaskSolutionWithFile(instance=task_solution)
            else:
                form = FormTaskSolution(instance=task_solution)

            return render(request, 'stud_process/task_solution.html', {'module_id': module_id, 'full_course': full_course, 'task': task, 'form': form })

        elif request.POST.get("test"):

            test = get_object_or_404(Test, id=lesson_id)
            full_test = test.get_full()
            return render(request, 'stud_process/testing.html', {'test': full_test, 'module_id': module_id})

        elif request.POST.get("finish_test"):
            test = get_object_or_404(Test, id=lesson_id)

            total_ball = 0
            answers = {}
            for key, value in (request.POST.copy()).items():
                if re.fullmatch('q_\d+_a_\d+', key):
                    keys = key.split('_')
                    q = keys[1]
                    a = keys[3]
                    if answers.get(q) is None:
                        answers[q] = {}
                    answers[q][a] = value

            for q_id, value in answers.items():
                question = Question.objects.get(pk=q_id)
                correct_answers = Answer.objects.filter(question_id=question, is_true=True)
                correct_answers_id = []
                total_correct_answers_in_question = 0
                incorrect_answers = 0
                for answer in correct_answers:
                    correct_answers_id.append(answer.id)

                for a_id, u_answer in value.items():
                    if u_answer:
                        if int(a_id) in correct_answers_id:
                            total_correct_answers_in_question += 1
                        else:
                            incorrect_answers += 1

                if len(correct_answers) == total_correct_answers_in_question and incorrect_answers == 0:
                    total_ball += 1
            if len(answers) != 0:
                ball = (total_ball / len(answers)) * 100
            else:
                ball = 0
            test_result = TestResult.objects.filter(user=request.user, test=test)
            if test_result:
                test_result = test_result[0]
                if test_result.ball < ball:
                    test_result.ball = ball
                    test_result.save()
                else:
                    pass
            else:
                test_result = TestResult(user=request.user, test=test, ball=ball)
                test_result.save()

            if test_result.ball >= test.min_ball:
                new_cl = CompletedLessons(user=request.user, lesson_type=lesson_type, lesson_id=lesson_id)
                new_cl.save()

        elif request.POST.get("task_solution"):
            task = get_object_or_404(Task, id=lesson_id)
            task_solutions = TaskSolutions.objects.filter(user=request.user, task=task)

            if task_solutions:
                task_solution = task_solutions[0]
            else:
                task_solution = None

            if task.response_is_file:
                form = FormTaskSolutionWithFile
            else:
                form = FormTaskSolution
            if task_solution:
                solution_form = form(instance=task_solution, data=request.POST, files=request.FILES)

                solution_form.save()
                task_solution.is_true = False
                task_solution.is_rejected = False
                task_solution.save()
            else:
                new_solution = form(request.POST, request.FILES)
                new_solution = new_solution.save(commit=False)
                new_solution.user = request.user
                new_solution.task = task
                new_solution.save()

        complete_course = check_completed(course, request.user)
        if complete_course:
            return render(request, 'stud_process/complete_course.html',
                          {'complete_course': complete_course, 'full_course': full_course, 'module_id': module_id})

        return redirect(reverse('stud_process:study_l', args=[course_id, module_id, lesson_type, lesson_id]))

# Create your views here.

import re
from django.shortcuts import render, redirect, reverse, get_object_or_404
from content.models import Course, Module, VideoLecture, Lecture, Task as LessonTask, Test, Question, Answer
from .forms import FormVideoLecture, FormLecture, FormTask, FormCourse, FormModule, FormTest, UserForm, UserFormReadonly
from users.models import User
from itertools import chain
from operator import attrgetter




def general_page(request):
    return render(request, 'custom_admin/admin_general_page.html')


def all_courses(request):
    courses = Course.objects.all()
    return render(request, 'custom_admin/courses.html', {'courses': courses})


def details_course(request, course_id):
    course = get_object_or_404(Course, pk=course_id)
    if request.method == 'GET':
        modules = Module.objects.filter(course_id=course_id)
        form = FormCourse(instance=course)
        return render(request, 'custom_admin/details_course.html', {'course': course, 'form': form, 'modules': modules})
    else:
        new_course = FormCourse(instance=course, data=request.POST, files=request.FILES)
        new_course = new_course.save(commit=False)
        new_course.owner = request.user
        new_course.save()
        return redirect(reverse('custom_admin:all_courses'))


def add_course(request):
    if request.method == 'GET':
        return render(request, 'custom_admin/add_course.html', {'form': FormCourse()})
    else:
        form = FormCourse(request.POST, files=request.FILES)
        new_course = form.save(commit=False)
        new_course.owner = request.user
        new_course.save()
        new_course.tab_index = new_course.id
        new_course.save()
        return redirect(reverse('custom_admin:all_courses'))


def details_module(request, course_id, module_id):
    module = get_object_or_404(Module, pk=module_id)
    course = Course.objects.get(pk=course_id)
    if request.method == 'GET':
        form = FormModule(instance=module)
        lessons = module.get_lessons_with_draft()
        return render(request, 'custom_admin/details_module.html', {'course': course, 'form': form,  'module': module, 'lessons': lessons})
    else:
        form = FormModule(request.POST, instance=module)
        form.save()
        return redirect(reverse('custom_admin:details_course', args=[course_id]))


def add_module(request, course_id):
    if request.method == 'GET':
        course = Course.objects.get(pk=course_id)
        return render(request, 'custom_admin/add_module.html', {'form': FormModule(), 'course': course})
    else:
        form = FormModule(request.POST)
        new_module = form.save(commit=False)
        new_module.course_id = Course.objects.get(pk=course_id)
        new_module.save()
        new_module.tab_index = new_module.id
        new_module.save()
        return redirect(reverse('custom_admin:details_course', args=[course_id]))


def details_lesson(request, course_id, module_id, lesson_type, lesson_id):
    module = Module.objects.get(pk=module_id)
    course = Course.objects.get(pk=course_id)
    lesson_types = {'vd': VideoLecture, 'lc': Lecture, 'ts': Test, 'tk': LessonTask}
    lesson_forms = {'vd': FormVideoLecture, 'lc': FormLecture, 'ts': 'test', 'tk': FormTask}

    lesson = get_object_or_404(lesson_types[lesson_type], pk=lesson_id)
    lesson_form = lesson_forms[lesson_type]

    if request.method == 'GET':
        if lesson_form == 'test':
            questions = Question.objects.filter(test_id=lesson)
            answers = {}
            for question in questions:
                answers[question.id] = Answer.objects.filter(question_id=question)
            return render(request, 'custom_admin/details_lesson_test.html', {'course': course, 'module': module, 'lesson':lesson, 'questions': questions, 'answers': answers})
        else:
            form = lesson_form(instance=lesson)
            return render(request, 'custom_admin/details_lesson.html', {'course': course, 'module': module, 'lesson': lesson, 'form': form})
    else:
        if lesson_form == 'test':
            copy_post = request.POST.copy()
            lesson = Test.objects.get(pk=lesson_id)
            edit_test(copy_post, lesson)
            if 'save_and_quit' in request.POST:
                return redirect(reverse('custom_admin:details_module', args=[course_id, module_id]))
            elif 'save' in request.POST:
                return redirect(reverse('custom_admin:details_lesson', args=[course_id, module_id, lesson_type, lesson_id]))
        else:
            try:
                form = lesson_form(data=request.POST, instance=lesson, files=request.FILES)
                form.save()
                return redirect(reverse('custom_admin:details_module', args=[course_id, module_id]))
            except ValueError:
                form = lesson_form(instance=lesson)
                error = 'Ошибка сохранения данных'
                return render(request, 'custom_admin/details_lesson.html', {'course': course, 'module': module, 'lesson': lesson, 'form': form, 'error': error})


def add_lesson(request, course_id, module_id, lesson_type):
    lesson_forms = {'vd': FormVideoLecture, 'lc': FormLecture, 'ts': 'test', 'tk': FormTask}
    lesson_form = lesson_forms[lesson_type]
    module = Module.objects.get(pk=module_id)
    course = Course.objects.get(pk=course_id)
    if request.method == 'GET':
        if lesson_form == 'test':
            return render(request, 'custom_admin/add_lesson_test.html', {'course': course, 'module': module, 'form': FormTest()})
        else:
            return render(request, 'custom_admin/add_lesson.html', {'course': course, 'module': module, 'form': lesson_form()})
    else:
        if lesson_form == 'test':
            copy_post = request.POST.copy()
            add_lesson_test(copy_post, module)
            return redirect(reverse('custom_admin:details_module', args=[course_id, module_id]))
        else:
            form = lesson_form(data=request.POST, files=request.FILES)
            new_lesson = form.save(commit=False)
            new_lesson.module_id = module
            new_lesson.content_type = lesson_type
            new_lesson.save()
            new_lesson.tab_index = new_lesson.id
            new_lesson.save()
            return redirect(reverse('custom_admin:details_module', args=[course_id, module_id]))


def add_answer_in_test(data):
    for key, value in data.items():
        if re.fullmatch('new_answer_\d+_q_\d+', key):

            a_num = key.split('_')[2]
            q_id = key.split('_')[4]
            question = Question.objects.get(pk=q_id)

            new_answer = Answer.objects.create(
                question_id=question,
                text=value,
                is_true=bool(data.get('new_cb_' + str(a_num) + '_q_' + str(q_id), False))
            )
            new_answer.save()


def edit_questions(data):
    for key, value in data.items():
        if re.fullmatch('added_text_q_\d+', key):
            q_id = key.split('_')[3]
            question = Question.objects.get(pk=q_id)
            question.text = value
            question.description = data.get('added_description_q_'+q_id)
            question.save()


def edit_answers(data):
    for key, value in data.items():
        if re.fullmatch('added_answer_\d+_q_\d+', key):
            a_id = key.split('_')[2]
            q_id = key.split('_')[4]
            answer = Answer.objects.get(pk=a_id)
            answer.text = value
            answer.is_true = bool(data.get('added_cb_' + a_id + '_q_'+q_id, False))
            answer.save()


def create_new_questions_and_answers(test, data):
    questions = {}
    answers = {}
    checkboxes = {}
    descriptions = {}
    for key, value in data.items():
        if re.fullmatch('answer_\d+_q_\d+', key):
            answers[key] = value
        elif re.fullmatch('cb_\d+_q_\d+', key):
            checkboxes[key] = value
        elif re.fullmatch('text_q_\d+', key):
            questions[key] = value
        elif re.fullmatch('description_q_\d+', key):
            descriptions[key] = value

    for q_key, q_value in questions.items():
        q_num = int(q_key.split('_')[2])
        new_question = Question.objects.create(
            test_id=test,
            text=q_value,
            description=descriptions.get('description_q_' + str(q_num), '')
        )
        new_question.save()
        for a_key, a_value in answers.items():
            if re.fullmatch('answer_\d+_q_' + str(q_num), a_key):
                a_num = a_key.split('_')[1]
                new_answer = Answer.objects.create(
                    question_id=new_question,
                    text=a_value,
                    is_true=bool(checkboxes.get('cb_' + str(a_num) + '_q_' + str(q_num), False))
                )
                new_answer.save()


def remove_elements(data):
    for key, value in data.items():
        if re.fullmatch('removed_a_\d+', key):
            Answer.objects.get(pk=value).delete()

    for key, value in data.items():
        if re.fullmatch('removed_q_\d+', key):
            Question.objects.get(pk=value).delete()


def add_lesson_test(data, module):
    new_test = Test.objects.create(
        module_id=module,
        name=data['name'],
        description=data['description'],
        stop_lesson=bool(data.get('stop_lesson', False)),
        content_type='ts',
        time=data['time']
    )
    new_test.save()
    new_test.tab_index = new_test.id
    new_test.save()
    create_new_questions_and_answers(new_test, data)


def edit_test(data, test):
    test.name = data.get('name')
    test.description = data.get('description')
    test.stop_lesson = bool(data.get('stop_lesson'))
    test.time = data.get('time')
    test.min_ball = data.get('min_ball')
    test.is_draft = bool(data.get('is_draft'))
    test.save()
    create_new_questions_and_answers(test, data)
    add_answer_in_test(data)
    edit_questions(data)
    edit_answers(data)
    remove_elements(data)


def users(request):
    search_string = request.GET.get('search_string')
    if not search_string:
        users_list = User.objects.all()
    else:
        users_list_last_name = User.objects.filter(last_name__contains=search_string)
        users_list_first_name = User.objects.filter(first_name__contains=search_string)
        users_list_patronymic = User.objects.filter(patronymic__contains=search_string)
        users_list_email = User.objects.filter(email__contains=search_string)
        users_list = chain(users_list_email, users_list_last_name, users_list_first_name, users_list_patronymic)
    result = []
    for u in users_list:
        if not (u in result):
            result.append(u)
    users_list = sorted(result, key=attrgetter('last_name'))

    return render(request, 'custom_admin/users.html', {'users': users_list})


def user_page(request, user_id):
    user = User.objects.get(pk=user_id)
    if request.method == 'POST':
        user = UserForm(request.POST, instance=user)
        user.save()
    user = User.objects.get(pk=user_id)
    if request.user.is_superuser:
        form = UserForm(instance=user)
    else:
        form = UserFormReadonly(instance=user)

    return render(request, 'custom_admin/user_page.html', {'current_user': user, 'form': form})
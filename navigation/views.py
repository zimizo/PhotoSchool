from django.shortcuts import render, redirect, reverse, get_object_or_404
from content.models import Course
from stud_process.models import InStudying
from .forms import FormUser
from stud_process.models import CompletedCourses, InStudying


def get_courses_in_study(user):
    in_study = InStudying.objects.filter(user=user)
    result = []
    for i_s in in_study:
        if not CompletedCourses.objects.filter(user=user, course=i_s.course):
            result.append(i_s.course)

    return result


def get_complete_courses(user):
    results = []
    complete_courses = CompletedCourses.objects.filter(user=user)
    for cc in complete_courses:
        results.append(cc.course)

    return results

def home(request):
    return render(request, 'navigation/home.html')


def user_profile(request):
    form = FormUser(instance=request.user)
    course_in_study = get_courses_in_study(request.user)
    complete_courses = get_complete_courses(request.user)
    message = None
    if request.method == "POST":

        if request.POST.get('user_profile_save'):
            user = request.user
            user.first_name = request.POST.get('first_name')
            user.last_name = request.POST.get('last_name')
            user.patronymic = request.POST.get('patronymic')

            user.save()
            message = 'Данные сохранены'

            form = FormUser(instance=user)

        elif request.POST.get('change_password'):

            if request.POST.get('new_password1') == request.POST.get('new_password2'):
                message = 'Пароль был изменен'
            else:
                message = 'Пароли не совпадают'

    return render(request,
                  'navigation/user_profile.html',
                  {
                      'form': form,
                      'complete_courses': complete_courses,
                      'course_in_study': course_in_study,
                      'message': message
                  })


def courses(request):
    courses = Course.objects.filter(is_draft=False)
    return render(request, 'navigation/courses.html', {'courses': courses})


def details_course(request, course_id):
    course = get_object_or_404(Course, pk=course_id)
    full_course = course.get_full_content()
    if request.user.is_authenticated is not True:
        return redirect(reverse('users:loginuser'))

    if request.method == 'POST':

        if request.POST.get("start_course"):
            new_student = InStudying.objects.create(user=request.user, course=course)
            new_student.save()
            return redirect(reverse('stud_process:study_c', args=[course_id]))

        elif request.POST.get("continue_course"):
            in_s = InStudying.objects.filter(user=request.user, course=course)
            if not in_s:
                new_student = InStudying.objects.create(user=request.user, course=course)
                new_student.save()
            # найти следующий не пройденый урок
            return redirect(reverse('stud_process:study_c', args=[course_id]))
    else:
        in_studying = InStudying.objects.filter(user=request.user, course=course)
        count_lessons = course.get_count_lessons()
        return render(request, 'navigation/details_course.html', {'course': course, 'in_studying': in_studying, 'count_lessons': count_lessons})


def trenapp(request):
    return render(request, 'navigation/trenapp.html')


def camera(request):
    return render(request, 'navigation/Sim.html')


def certificate(request, complete_course_id):
    comp_course = CompletedCourses.objects.get(pk=complete_course_id)
    return render(request, 'navigation/certificate.html', {'comp': comp_course})


def authors(request):
    return render(request, 'navigation/authors.html')

from django.contrib.auth.decorators import user_passes_test
from django.urls import path
from . import views

app_name = 'custom_admin'

urlpatterns = [
    # general admin page
    path('',
         user_passes_test(lambda u: u.is_staff)(views.general_page),
         name='general_page'),
    # page with all courses
    path('courses/',
         user_passes_test(lambda u: u.is_staff)(views.all_courses),
         name='all_courses'),
    # page with one course (edit)
    path('course/<int:course_id>',
         user_passes_test(lambda u: u.is_staff)(views.details_course),
         name='details_course'),
    # added course page
    path('courses/add_course',
         user_passes_test(lambda u: u.is_staff)(views.add_course),
         name='add_course'),
    # page with one module (edit)
    path('course/<int:course_id>/module/<int:module_id>',
         user_passes_test(lambda u: u.is_staff)(views.details_module),
         name='details_module'),
    # added module page
    path('course/<int:course_id>/module/add_module',
         user_passes_test(lambda u: u.is_staff)(views.add_module),
         name='add_module'),
    # page with one lesson (edit)
    path('course/<int:course_id>/module/<int:module_id>/lesson/<str:lesson_type>/<int:lesson_id>',
         user_passes_test(lambda u: u.is_staff)(views.details_lesson),
         name='details_lesson'),
    # added lesson pages
    path('course/<int:course_id>/module/<int:module_id>/add_lesson/<str:lesson_type>',
         user_passes_test(lambda u: u.is_staff)(views.add_lesson),
         name='add_lesson'),

    path('users/',
         user_passes_test(lambda u: u.is_staff)(views.users),
         name='users'),

    path('users/<int:user_id>/',
         user_passes_test(lambda u: u.is_staff)(views.user_page),
         name='user_page'),


]
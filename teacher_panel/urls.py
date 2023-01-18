from django.contrib.auth.decorators import user_passes_test
from django.urls import path
from . import views

app_name = 'teacher_panel'

urlpatterns = [
    # check task pages
    path('',
         user_passes_test(lambda u: u.is_staff)(views.general_page),
         name='general_page'),
    path('check_task',
         user_passes_test(lambda u: u.is_staff)(views.check_task_list_courses),
         name='check_task_list_courses'),
    path('check_task/<int:course_id>',
         user_passes_test(lambda u: u.is_staff)(views.check_task_list_tasks),
         name='check_task_list_tasks'),
    path('check_task/<int:course_id>/<int:task_id>',
         user_passes_test(lambda u: u.is_staff)(views.check_task_solution_list),
         name='check_task_solution_list'),
    path('check_task/<int:course_id>/<int:task_id>/<int:solution_id>',
         user_passes_test(lambda u: u.is_staff)(views.check_task_solution_details),
         name='check_task_solution_details'),
    # Check users pages
    path('check_users',
         user_passes_test(lambda u: u.is_staff)(views.check_users_list_users),
         name='check_users_list_users'),
    path('check_users/<int:user_id>',
         user_passes_test(lambda u: u.is_staff)(views.check_users_details),
         name='check_users_details'),
    path('check_users/<int:user_id>/<int:course_id>',
         user_passes_test(lambda u: u.is_staff)(views.check_users_details_course),
         name='check_users_details_course'),
    path('check_users/<int:user_id>/<int:course_id>/<str:lesson_type>/<int:lesson_id>',
         user_passes_test(lambda u: u.is_staff)(views.check_users_details_lesson),
         name='check_users_details_lesson'),
]
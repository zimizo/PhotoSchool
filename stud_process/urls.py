from django.urls import path, include
from . import views
from rest_framework import routers
from stud_process.api_views import TestViewSet, TaskViewSet, LectureViewSet, VideoLectureViewSet \
    , CompletedCourseSet, CompletedLessonSet

app_name = 'stud_process'

router = routers.DefaultRouter()
router.register(r'ts', TestViewSet, 'test')
router.register(r'tk', TaskViewSet, 'task')
router.register(r'lc', LectureViewSet, 'lecture')
router.register(r'vd', VideoLectureViewSet, 'video')
router.register(r'completeLesson', CompletedLessonSet, 'completeLesson')
router.register(r'completeCourse', CompletedCourseSet, 'completeCourse')

urlpatterns = [
    path('<int:course_id>/<int:module_id>/<str:lesson_type>/<int:lesson_id>', views.study, name='study_l'),
    path('<int:course_id>/', views.study, name='study_c'),
    path('api/lesson/', include(router.urls))
]
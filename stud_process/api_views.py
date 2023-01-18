from stud_process.serializers import TestSerializer,\
    TaskSerializer, LectureSerializer, VideoLectureSerializer \
    , CompletedLessonSerializer, CompletedCourseSerializer
from content.models import Test, Task, Lecture, VideoLecture
from rest_framework import viewsets, permissions
from .models import CompletedLessons, CompletedCourses


class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.filter()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TestSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.filter()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TaskSerializer


class LectureViewSet(viewsets.ModelViewSet):
    queryset = Lecture.objects.filter()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LectureSerializer


class VideoLectureViewSet(viewsets.ModelViewSet):
    queryset = VideoLecture.objects.filter()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VideoLectureSerializer

# stud process views


class CompletedLessonSet(viewsets.ModelViewSet):
    queryset = CompletedLessons.objects.filter()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CompletedLessonSerializer


class CompletedCourseSet(viewsets.ModelViewSet):
    queryset = CompletedCourses.objects.filter()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CompletedCourseSerializer




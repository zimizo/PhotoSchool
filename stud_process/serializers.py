from rest_framework.serializers import ModelSerializer
from content.models import Test, Task, Lecture, VideoLecture
from .models import CompletedLessons, CompletedCourses


class TestSerializer(ModelSerializer):
    class Meta:
        model = Test
        fields = ['id', 'content_type', 'name', 'description', 'time']


class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'content_type', 'name', 'description', 'text']


class LectureSerializer(ModelSerializer):
    class Meta:
        model = Lecture
        fields = ['id', 'content_type', 'name', 'text']


class VideoLectureSerializer(ModelSerializer):
    class Meta:
        model = VideoLecture
        fields = ['id', 'content_type', 'name', 'description', 'video']


class CompletedLessonSerializer(ModelSerializer):
    class Meta:
        model = CompletedLessons
        fields = ['id', 'user', 'lesson_type', 'lesson_id']


class CompletedCourseSerializer(ModelSerializer):
    class Meta:
        model = CompletedCourses
        fields = ['id', 'user', 'course']

from django.db import models
from itertools import chain
from operator import attrgetter
from django.core.validators import MinValueValidator, MaxValueValidator
from users.models import User


class Course(models.Model):
    name = models.CharField(max_length=100, verbose_name='Наименование')
    photo = models.ImageField(upload_to="course_photo", blank=True)
    description = models.TextField(max_length=1000, blank=True, verbose_name='Описание')
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    is_draft = models.BooleanField(default=False, blank=True, verbose_name='Отметить как черновик')
    tab_index = models.IntegerField(default=0)

    def get_lessons(self):
        modules_list = Module.objects.filter(course_id=self, is_draft=False)
        lessons = []
        for module in modules_list:
            lessons = lessons + module.get_lessons()
        return lessons

    def get_count_lessons(self):
        modules_list = Module.objects.filter(course_id=self, is_draft=False)
        counts = {'ts': 0, 'lc': 0, 'tk': 0}
        lessons = []

        for module in modules_list:
            lessons = lessons + module.get_lessons()

        for lesson in lessons:
            if lesson.content_type == 'lc' or lesson.content_type == 'vd':
                counts['lc'] += 1
            elif lesson.content_type == 'ts':
                counts['ts'] += 1
            elif lesson.content_type == 'tk':
                counts['tk'] += 1
        return counts

    def get_full_content(self):
        modules_list = Module.objects.filter(course_id=self, is_draft=False)
        modules = []
        for module in modules_list:
            modules.append({'module_object': module, 'lessons': module.get_lessons()})
        return {'course': self, 'modules': modules}

    def get_course_tree(self, user):
        modules_list = Module.objects.filter(course_id=self, is_draft=False)
        modules = []
        for module in modules_list:
            modules.append({'module_object': module, 'lessons': module.get_lessons_tree(user)})
        return {'course': self, 'modules': modules}


class Module(models.Model):
    name = models.CharField(max_length=100, verbose_name='Наименование')
    description = models.TextField(max_length=1000, blank=True, verbose_name='Описание')
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    is_draft = models.BooleanField(default=False, verbose_name='Отметить как черновик')
    tab_index = models.IntegerField(default=0)

    def get_lessons(self):
        videos = VideoLecture.objects.filter(module_id=self, is_draft=False)
        tasks = Task.objects.filter(module_id=self,  is_draft=False)
        lectures = Lecture.objects.filter(module_id=self,  is_draft=False)
        tests = Test.objects.filter(module_id=self,  is_draft=False)
        lessons = sorted(chain(videos, tasks, lectures, tests), key=attrgetter('tab_index'))
        return lessons

    def get_lessons_tree(self, user):
        videos = VideoLecture.objects.filter(module_id=self, is_draft=False)
        tasks = Task.objects.filter(module_id=self,  is_draft=False)
        lectures = Lecture.objects.filter(module_id=self,  is_draft=False)
        tests = Test.objects.filter(module_id=self,  is_draft=False)
        lessons = sorted(chain(videos, tasks, lectures, tests), key=attrgetter('tab_index'))
        # for lesson in lessons:
        #     if CompletedLessons.objects.filter(user=user, lesson_type=lesson.content_type, lessons_id=lesson.id):
        #         lesson['passed'] = True
        #     else:
        #         lesson['passed'] = False

        return lessons

    def get_lessons_with_draft(self):
        videos = VideoLecture.objects.filter(module_id=self)
        tasks = Task.objects.filter(module_id=self)
        lectures = Lecture.objects.filter(module_id=self)
        tests = Test.objects.filter(module_id=self)
        lessons = sorted(chain(videos, tasks, lectures, tests), key=attrgetter('tab_index'))
        return lessons


class Lesson(models.Model):
    name = models.CharField(max_length=100, verbose_name='Наименование')
    description = models.TextField(max_length=1000, blank=True, verbose_name='Описание')
    module_id = models.ForeignKey(Module, on_delete=models.CASCADE)
    created = models.DateField(auto_now_add=True)
    stop_lesson = models.BooleanField(default=False)
    tab_index = models.IntegerField(default=0)
    content_type = models.CharField(max_length=2, choices=[('ts', 'test'), ('lc', 'lecture'), ('vd', 'video'), ('tk', 'task')])
    is_draft = models.BooleanField(default=False, verbose_name='Отметить как черновик')

    class Meta:
        abstract = True


# Lessons models
class Lecture(Lesson):
    text = models.TextField(verbose_name='Текст лекции')


class VideoLecture(Lesson):
    video = models.FileField(upload_to="videos", verbose_name='Видео')


# Tests models
class Test(Lesson):
    time = models.IntegerField(default=15, validators=[MinValueValidator(0), MaxValueValidator(60)], verbose_name='Время на выполнение (минуты)')
    min_ball = models.IntegerField(default=60, validators=[MinValueValidator(0), MaxValueValidator(100)], verbose_name='Минимальный балл')

    def get_full(self):
        full_test = {'test': self, 'questions': []}
        questions = Question.objects.filter(test_id=self)
        for question in questions:
            full_test['questions'].append({'question': question, 'answers': Answer.objects.filter(question_id=question)})

        return full_test


class Question(models.Model):
    test_id = models.ForeignKey(Test, on_delete=models.CASCADE)
    description = models.TextField(max_length=100, blank=True, verbose_name='Описание')
    text = models.TextField()


class Answer(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.TextField()
    is_true = models.BooleanField(default=False)


# Tasks models
class Task(Lesson):
    text = models.TextField()
    response_is_file = models.BooleanField(default=False)





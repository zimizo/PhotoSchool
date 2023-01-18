from django.db import models
from content.models import Course, Module, Task, Test
from users.models import User


class CompletedLessons(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    lesson_type = models.CharField(max_length=2, choices=[('ts', 'test'), ('lc', 'lecture'), ('vd', 'video'), ('tk', 'task')], verbose_name='Тип урока')
    lesson_id = models.IntegerField(verbose_name='ID Урока')
    date = models.DateField(auto_now_add=True, verbose_name='Дата выполнения')


class CompletedCourses(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name='Курс')
    date = models.DateField(auto_now_add=True, verbose_name='Дата')


class InStudying(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name='Курс')
    date_started = models.DateField(auto_now_add=True, verbose_name='Дата начала')


class TaskSolutions(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    task = models.ForeignKey(Task, on_delete=models.CASCADE, verbose_name='Задание')
    text = models.TextField(max_length=1000, verbose_name='Ответ')
    file = models.FileField(blank=True, verbose_name='Файл')
    comment = models.TextField(blank=True, verbose_name='Комментарий')
    is_rejected = models.BooleanField(default=False, verbose_name='Отметить отклоненным')
    is_true = models.BooleanField(default=False, verbose_name='Отметить завершенным')


class TestResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')
    test = models.ForeignKey(Test, on_delete=models.CASCADE, verbose_name='Тест')
    ball = models.FloatField(verbose_name='Балл')



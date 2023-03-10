# Generated by Django 4.0.3 on 2022-06-02 14:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0015_alter_course_description_alter_course_is_draft_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('stud_process', '0005_delete_completedmodule'),
    ]

    operations = [
        migrations.AlterField(
            model_name='completedcourses',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='content.course', verbose_name='Курс'),
        ),
        migrations.AlterField(
            model_name='completedcourses',
            name='date',
            field=models.DateField(auto_now_add=True, verbose_name='Дата'),
        ),
        migrations.AlterField(
            model_name='completedcourses',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
        migrations.AlterField(
            model_name='completedlessons',
            name='date',
            field=models.DateField(auto_now_add=True, verbose_name='Дата выполнения'),
        ),
        migrations.AlterField(
            model_name='completedlessons',
            name='lesson_id',
            field=models.IntegerField(verbose_name='ID Урока'),
        ),
        migrations.AlterField(
            model_name='completedlessons',
            name='lesson_type',
            field=models.CharField(choices=[('ts', 'test'), ('lc', 'lecture'), ('vd', 'video'), ('tk', 'task')], max_length=2, verbose_name='Тип урока'),
        ),
        migrations.AlterField(
            model_name='completedlessons',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
        migrations.AlterField(
            model_name='instudying',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='content.course', verbose_name='Курс'),
        ),
        migrations.AlterField(
            model_name='instudying',
            name='date_started',
            field=models.DateField(auto_now_add=True, verbose_name='Дата начала'),
        ),
        migrations.AlterField(
            model_name='instudying',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
        migrations.AlterField(
            model_name='tasksolutions',
            name='file',
            field=models.FileField(blank=True, upload_to='', verbose_name='Файл'),
        ),
        migrations.AlterField(
            model_name='tasksolutions',
            name='is_true',
            field=models.BooleanField(default=False, verbose_name='Отметить завершенным'),
        ),
        migrations.AlterField(
            model_name='tasksolutions',
            name='task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='content.task', verbose_name='Задание'),
        ),
        migrations.AlterField(
            model_name='tasksolutions',
            name='text',
            field=models.TextField(max_length=1000, verbose_name='Ответ'),
        ),
        migrations.AlterField(
            model_name='tasksolutions',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
        migrations.AlterField(
            model_name='testresult',
            name='ball',
            field=models.FloatField(verbose_name='Балл'),
        ),
        migrations.AlterField(
            model_name='testresult',
            name='test',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='content.test', verbose_name='Тест'),
        ),
        migrations.AlterField(
            model_name='testresult',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
    ]

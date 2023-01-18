# Generated by Django 4.0.3 on 2022-06-02 14:47

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0014_alter_test_min_ball_alter_test_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='description',
            field=models.TextField(blank=True, max_length=1000, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='course',
            name='is_draft',
            field=models.BooleanField(blank=True, default=False, verbose_name='Отметить как черновик'),
        ),
        migrations.AlterField(
            model_name='course',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Наименование'),
        ),
        migrations.AlterField(
            model_name='lecture',
            name='description',
            field=models.TextField(blank=True, max_length=1000, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='lecture',
            name='is_draft',
            field=models.BooleanField(default=False, verbose_name='Отметить как черновик'),
        ),
        migrations.AlterField(
            model_name='lecture',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Наименование'),
        ),
        migrations.AlterField(
            model_name='lecture',
            name='text',
            field=models.TextField(verbose_name='Текст лекции'),
        ),
        migrations.AlterField(
            model_name='module',
            name='description',
            field=models.TextField(blank=True, max_length=1000, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='module',
            name='is_draft',
            field=models.BooleanField(default=False, verbose_name='Отметить как черновик'),
        ),
        migrations.AlterField(
            model_name='module',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Наименование'),
        ),
        migrations.AlterField(
            model_name='question',
            name='description',
            field=models.TextField(blank=True, max_length=100, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.TextField(blank=True, max_length=1000, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='task',
            name='is_draft',
            field=models.BooleanField(default=False, verbose_name='Отметить как черновик'),
        ),
        migrations.AlterField(
            model_name='task',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Наименование'),
        ),
        migrations.AlterField(
            model_name='test',
            name='description',
            field=models.TextField(blank=True, max_length=1000, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='test',
            name='is_draft',
            field=models.BooleanField(default=False, verbose_name='Отметить как черновик'),
        ),
        migrations.AlterField(
            model_name='test',
            name='min_ball',
            field=models.IntegerField(default=60, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)], verbose_name='Минимальный балл'),
        ),
        migrations.AlterField(
            model_name='test',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Наименование'),
        ),
        migrations.AlterField(
            model_name='test',
            name='time',
            field=models.IntegerField(default=15, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(180)], verbose_name='Время на выполнение'),
        ),
        migrations.AlterField(
            model_name='videolecture',
            name='description',
            field=models.TextField(blank=True, max_length=1000, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='videolecture',
            name='is_draft',
            field=models.BooleanField(default=False, verbose_name='Отметить как черновик'),
        ),
        migrations.AlterField(
            model_name='videolecture',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Наименование'),
        ),
        migrations.AlterField(
            model_name='videolecture',
            name='video',
            field=models.FileField(upload_to='videos', verbose_name='Видео'),
        ),
    ]

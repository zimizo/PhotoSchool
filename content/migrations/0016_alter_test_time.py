# Generated by Django 4.0.3 on 2022-06-09 08:01

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0015_alter_course_description_alter_course_is_draft_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test',
            name='time',
            field=models.IntegerField(default=15, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(60)], verbose_name='Время на выполнение (минуты)'),
        ),
    ]

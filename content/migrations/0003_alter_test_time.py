# Generated by Django 3.2.5 on 2022-01-05 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test',
            name='time',
            field=models.IntegerField(default=15),
        ),
    ]
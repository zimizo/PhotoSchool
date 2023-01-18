from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from .user_manager import NoUsernameUserManager


class User(AbstractUser):
    username = models.CharField(max_length=150, verbose_name='Логин')
    email = models.EmailField(unique=True, blank=True, verbose_name='Электронный адрес')
    patronymic = models.CharField("Отчество", max_length=150)
    first_name = models.CharField("Имя", max_length=150)
    last_name = models.CharField("Фамилия", max_length=150)
    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'

    objects = NoUsernameUserManager()

    def __str__(self):
        return self.email



# Create your models here.

from django.contrib import admin
from .models import User
from stud_process.models import TaskSolutions


class UserAdmin(admin.ModelAdmin):
    field_order = ['email', 'last_name', 'first_name', 'patronymic', 'is_active',
                   'date_joined', 'is_staff']
    fields = ['email', 'last_name', 'first_name', 'patronymic',
              'is_active', 'date_joined', 'is_staff']
    readonly_fields = ('date_joined', 'is_active')


admin.site.register(User, UserAdmin)
admin.site.register(TaskSolutions)

from django.contrib import admin
from .models import InStudying, TestResult, CompletedLessons, CompletedCourses


class ModelAdmins(admin.ModelAdmin):
    pass


admin.site.register(CompletedLessons, ModelAdmins)
admin.site.register(CompletedCourses, ModelAdmins)

admin.site.register(InStudying, ModelAdmins)
admin.site.register(TestResult, ModelAdmins)

# Register your models here.

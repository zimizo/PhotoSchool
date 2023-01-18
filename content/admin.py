from django.contrib import admin
from .models import Course, Module, Lecture, VideoLecture, Test, Task as LessonTask, Question, Answer


class CourseAdmin(admin.ModelAdmin):
    pass


class ModuleAdmin(admin.ModelAdmin):
    pass


class LessonAdmin(admin.ModelAdmin):
    pass


admin.site.register(Course, CourseAdmin)
admin.site.register(Module, ModuleAdmin)
admin.site.register(VideoLecture, LessonAdmin)
admin.site.register(Lecture, LessonAdmin)
admin.site.register(Test, LessonAdmin)
admin.site.register(LessonTask, LessonAdmin)
admin.site.register(Question, LessonAdmin)
admin.site.register(Answer, LessonAdmin)
# Register your models here.



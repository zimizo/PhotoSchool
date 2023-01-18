from django.forms import ModelForm
from content.models import Course, Module, VideoLecture, Lecture, Task, Test
from django_summernote.widgets import SummernoteWidget
from django import forms
from users.models import User


class FormCourse(ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ))
    description = forms.CharField(widget=forms.Textarea(attrs={"class": "form-control"}, ), required=False)
    photo = forms.ImageField(required=False)
    is_draft = forms.BooleanField(widget=forms.CheckboxInput(attrs={"class": "form-check-input"}, ), required=False)

    class Meta:
        model = Course
        fields = ['name', 'description', 'photo', 'is_draft']


class FormModule(ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ))
    description = forms.CharField(widget=forms.Textarea(attrs={"class": "form-control"}, ), required=False)
    is_draft = forms.BooleanField(widget=forms.CheckboxInput(attrs={"class": "form-check-input"}, ), required=False)

    class Meta:
        model = Module
        fields = ['name', 'description', 'is_draft']


class FormVideoLecture(ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), label='Название лекции:')
    description = forms.CharField(widget=forms.Textarea(attrs={"class": "form-control"}, ), required=False,
                                  label="Описание:")
    is_draft = forms.BooleanField(widget=forms.CheckboxInput(attrs={"class": "form-check-input"}, ), required=False,
                                  label="Черновик:")
    video = forms.FileField(required=False, label="")
    class Meta:
        model = VideoLecture
        fields = ['name', 'description', 'video', 'is_draft']


class FormLecture(ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), label='Название лекции:')
    description = forms.CharField(widget=forms.Textarea(attrs={"class": "form-control"}, ), required=False, label="Описание:")
    is_draft = forms.BooleanField(widget=forms.CheckboxInput(attrs={"class": "form-check-input"}, ), required=False, label="Черновик:")
    text = forms.CharField(widget=SummernoteWidget(attrs={"class": "form-control", "style": "width: 98%;"}, ), required=False, label="")
    class Meta:
        model = Lecture
        fields = ['name', 'description', 'text', 'is_draft']

        widgets = {
            'text': SummernoteWidget(),
        }


class FormTest(ModelForm):
    class Meta:
        model = Test
        fields = ['name', 'description', 'time', 'stop_lesson', 'is_draft', 'min_ball']


class FormTask(ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), label='Название лекции:')
    description = forms.CharField(widget=forms.Textarea(attrs={"class": "form-control"}, ), required=False,
                                  label="Описание:")
    is_draft = forms.BooleanField(widget=forms.CheckboxInput(attrs={"class": "form-check-input"}, ), required=False,
                                  label="Черновик:")
    response_is_file = forms.BooleanField(widget=forms.CheckboxInput(attrs={"class": "form-check-input"}, ), required=False,
                                     label="Ответ в виде файла:")
    text = forms.CharField(widget=forms.Textarea(attrs={"class": "form-control"}, ), required=False,
                                  label="Текст задания:")

    class Meta:
        model = Task
        fields = ['name', 'description', 'text', 'response_is_file', 'is_draft']


class UserForm(ModelForm):
    email = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), required=True)
    last_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), required=True)
    first_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), required=True)
    patronymic = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), required=False)
    is_staff = forms.BooleanField(required=False)
    is_superuser = forms.BooleanField(required=False)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'patronymic', 'email', 'is_staff', 'is_superuser']


class UserFormReadonly(ModelForm):
    email = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), required=True, disabled=True)
    last_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), required=True, disabled=True)
    first_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), required=True, disabled=True)
    patronymic = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), required=True, disabled=True)
    is_staff = forms.BooleanField(widget=forms.BooleanField(), disabled=True, required=False)
    is_superuser = forms.BooleanField(widget=forms.BooleanField(), disabled=True, required=False)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'patronymic', 'email', 'is_staff', 'is_superuser']
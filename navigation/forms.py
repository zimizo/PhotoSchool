from django.forms import ModelForm
from users.models import User
from django import forms


class FormUser(ModelForm):
    email = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ), disabled=True)
    last_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ))
    first_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ))
    patronymic = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}, ))
    class Meta:
        model = User
        fields = ['email', 'patronymic', 'first_name', 'last_name']
        readonly_fields = ('email',)
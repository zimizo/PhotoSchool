from django.shortcuts import render
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import AuthenticationForm
from .models import User
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError
from .functions import normalize_email


def signupuser(request):
    if request.method == 'GET':
        return render(request, 'users/signupuser.html')
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(password=request.POST['password1'],
                                                email=normalize_email(request.POST['email']),
                                                last_name=request.POST.get('last_name'),
                                                first_name=request.POST.get('first_name'),
                                                patronymic=request.POST.get('patronymic'))
                user.save()
                login(request, user)
                return redirect('home')

            except IntegrityError:
                return render(request, 'users/signupuser.html',
                              {'error': 'Электронный адрес уже используется'})
        else:
            return render(request, 'users/signupuser.html', {'error': 'Пароли не совпадают'})


def loginuser(request):
    if request.method == 'GET':
        return render(request, 'users/loginuser.html')
    else:
        user = authenticate(request, email=request.POST['email'], password=request.POST['password'])
        if user is None:
            return render(request, 'users/loginuser.html',
                          {'form': AuthenticationForm(), 'error': 'Логин или пароль введены не верно'})
        else:
            login(request, user)
            return redirect('home')


def logoutuser(request):
    if request.method == 'POST':
        logout(request)
        return redirect('home')
# Create your views here.

"""PhotoSchool URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from navigation import views as nav_views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('custom_admin/', include('custom_admin.urls')),
    path('teacher_panel/', include('teacher_panel.urls')),
    path('admin/', admin.site.urls),
    # navigation
    path('', nav_views.home, name='home'),
    path('courses', nav_views.courses, name='list_courses'),
    path('me', nav_views.user_profile, name='user_profile'),
    path('c/<int:course_id>', nav_views.details_course, name='nav_details_course'),
    path('trenapp', nav_views.trenapp, name='trenapp'),
    path('authors', nav_views.authors, name='authors'),


    path('trenapp/camera', nav_views.camera, name='camera'),
    path('get_certificate/<int:complete_course_id>', nav_views.certificate, name='certificate'),


    path('s/', include('stud_process.urls')),

    path('auth/', include('users.urls')),
    path('summernote/', include('django_summernote.urls')),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
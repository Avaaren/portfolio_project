from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('github/', include('github.urls', namespace='github')),
    path('', include('landing.urls', namespace='landing')),
    path('projects/', include('projects.urls', namespace='projects')),
    path('resume/', include('resume.urls', namespace='resume')),
]
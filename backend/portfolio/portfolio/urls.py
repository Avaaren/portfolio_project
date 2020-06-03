from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/github/', include('github.urls', namespace='github')),
    # path('api/', include('landing.urls', namespace='landing')),
    path('api/projects/', include('projects.urls', namespace='projects')),
    path('api/resume/', include('resume.urls', namespace='resume')),

    path('api_auth/', include('rest_framework.urls', namespace='rest_framework'))
]
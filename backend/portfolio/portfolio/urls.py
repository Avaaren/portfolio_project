from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/github/', include('github.urls', namespace='github')),
    # path('api/', include('landing.urls', namespace='landing')),
    path('api/projects/', include('projects.urls', namespace='projects')),
    path('api/resume/', include('resume.urls', namespace='resume')),

    path('api_auth/', include('rest_framework.urls', namespace='rest_framework'))
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
from django.urls import path
from . import views

app_name = 'resume'

urlpatterns = [
    path('', views.MainView.as_view(), name='pass')
]

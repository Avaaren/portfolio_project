from django.urls import path
from . import views

app = 'projects'

urlpatterns = [
    path('', views.MainView.as_view(), name='pass')
]

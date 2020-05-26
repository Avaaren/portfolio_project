from django.urls import path
from . import views

app_name  = 'portfolio'

urlpatterns = [
    path('', views.MainView.as_view(), name='pass')
]

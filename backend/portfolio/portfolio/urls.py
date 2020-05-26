from django.urls import path
from . import views

app = 'portfolio'

urlpatterns = [
    path('', views.MainView.as_view(), name='pass')
]

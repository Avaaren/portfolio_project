from django.urls import path
from . import views

app = 'landing'

urlpatterns = [
    path('', views.MainView.as_view(), name='pass')
]

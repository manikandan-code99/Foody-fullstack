from .views import UserView
from django.urls import path

urlpatterns = [
    
    path('signup/',UserView.as_view())
]
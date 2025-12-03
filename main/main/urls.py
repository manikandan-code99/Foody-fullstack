
from django.contrib import admin
from django.urls import path,include
from user_auth.views import UserLoginView,UserView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from admin_auth.views import VendorCreateView,VendorLoginView
from food_list.views import FoodItemListCreateView,FoodItemDetailView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path("user_signup/",UserView.as_view()),
    path("user_login/",UserLoginView.as_view()),

    path("vendor_signup/",VendorCreateView.as_view()),
    path("vendor_login/",VendorLoginView.as_view()),

    path("food_list/", FoodItemListCreateView.as_view(), name="fooditem-list-create"),
    path("food_list/<int:pk>/", FoodItemDetailView.as_view(), name="fooditem-detail"),

    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),

]

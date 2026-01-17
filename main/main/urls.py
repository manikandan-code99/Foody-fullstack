
from django.contrib import admin
from django.urls import path,include
from user_auth.views import UserLoginView,UserView,VendorRegisterView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from food_list.views import FoodItemListCreateView,FoodItemDetailView,FoodListPublicView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path("user_signup/",UserView.as_view()),
    path("login/",UserLoginView.as_view()),

    path("vendor_signup/",VendorRegisterView.as_view()),
  
    path("api/public_food_list/", FoodListPublicView.as_view(), name="food-public"), # catalog
    path("api/food_list/", FoodItemListCreateView.as_view(), name="fooditem-list-create"),
    path("api/food_list/<int:pk>/", FoodItemDetailView.as_view(), name="fooditem-detail"),

    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

]

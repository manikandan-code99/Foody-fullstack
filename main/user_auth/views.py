from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import *
from rest_framework import status

from django.contrib.auth import authenticate
from .serializers import CustomToken_Serializers


class UserView(APIView):
    def post(self,request):
        new_user= User(username=request.data['username'])
        new_user.set_password(request.data['password'])
        new_user.save()

        return Response({"msg": "User created"})
    
class UserLoginView(APIView):
    def post(self,request):
        serializer=CustomToken_Serializers(data=request.data)
        print(request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data)
        else:
            return Response(serializer.errors)


class VendorRegisterView(APIView):
    def post(self, request):
        user = User(
            username=request.data["username"],
            email=request.data.get("email"),
            restaurant_name=request.data["restaurant_name"],
            gst_no=request.data.get("gst_no"),
            address=request.data.get("address"),
            storephone=request.data.get("storephone"),
            is_vendor=True   # ⭐ IMPORTANT
        )
        user.set_password(request.data["password"])
        user.save()

        return Response(
            {"message": "Vendor registered successfully"},
            status=status.HTTP_201_CREATED
        )
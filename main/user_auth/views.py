from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CustomUser


class UserView(APIView):
    def post(self,request):
        new_user= CustomUser(username=request.data['username'])

        new_user.set_password(request.data['password'])
        new_user.save()

        return Response('new user creater')

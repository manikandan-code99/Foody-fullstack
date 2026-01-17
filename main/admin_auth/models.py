# vendors/models.py
from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.utils import timezone
from django.conf import settings

class Vendor(models.Model):
    
    restaurant_name = models.CharField(max_length=200 ,unique=True)
    username = models.CharField(max_length=200)
    email = models.EmailField(unique=True, null=True, blank=True)
    password = models.CharField(max_length=128)
    gst_no = models.CharField(max_length=50, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    storephone = models.CharField(max_length=15, blank=True, null=True)
    date_joined = models.DateTimeField(default=timezone.now)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return f"{self.restaurant_name} - {self.username}"

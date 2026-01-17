from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    # Vendor fields
    restaurant_name = models.CharField(max_length=200, unique=True, null=True, blank=True)
    gst_no = models.CharField(max_length=50, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    storephone = models.CharField(max_length=15, blank=True, null=True)
    is_vendor = models.BooleanField(default=False)
    



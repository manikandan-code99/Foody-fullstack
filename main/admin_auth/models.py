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


# for single user 



# from django.db import models
# from django.contrib.auth.hashers import make_password, check_password
# from django.utils import timezone
# from django.utils.translation import gettext_lazy as _



# class Vendor(models.Model):
#     restaurant_name=models.CharField(max_length=200 ,blank=True, null=True)
#     username = models.CharField(max_length=200)
#     email=models.EmailField()
#     password = models.CharField(max_length=8)
#     gst_no = models.CharField(max_length=50, blank=True, null=True)
#     address = models.TextField(blank=True, null=True)
#     storephone = models.IntegerField(default=12)
#     date_joined = models.DateTimeField(_("date joined"), default=timezone.now)

#     def set_password(self, raw_password):
#         self.password = make_password(raw_password)

#     def check_password(self, raw_password):
#         return check_password(raw_password, self.password)

#     def __str__(self):
#         return f"{self.restaurant_name} - {self.user.username}"
    



    # class Sampletable(models.Model):   #import from models
    
#     age = models.IntegerField(default=10)
#     weight = models.FloatField(null=True)
#     price = models.DecimalField(max_digits=10, decimal_places=2)

#     name = models.CharField(max_length=100)
#     feedback = models.TextField()

#     data_of_birth = models.DateField(auto_now=True)
#     data_time= models.DateTimeField(auto_now=True)
#     birth_time=models.TimeField(auto_now=True)
 #    description= models.TextField(blank=True,null=True)

#     is_admin=models.BooleanField().         ##python manage.py makemigrations
#                                             ##python manage.py migrate

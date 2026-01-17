
# from django.db import models
# from admin_auth.models import Vendor


# class FoodItem(models.Model):
#     vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, related_name='foods')
#     name = models.CharField(max_length=200)
#     description = models.TextField(blank=True, null=True)
#     restaurant_name=models.CharField(max_length=200)
#     price = models.DecimalField(max_digits=8, decimal_places=2)
#     is_available = models.BooleanField(default=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.name} - {self.vendor.restaurant_name}"
# food/models.py
from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class FoodItem(models.Model):
    vendor = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="foods"
    )
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.name}"

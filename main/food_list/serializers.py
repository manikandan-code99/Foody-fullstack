# foodlist/serializers.py
from rest_framework import serializers
from .models import FoodItem

class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields =  "__all__"
        read_only_fields = ['vendor', 'created_at']

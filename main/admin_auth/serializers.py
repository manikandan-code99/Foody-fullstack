from rest_framework import serializers
from .models import Vendor

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = "__all__"
        read_only_fields = ("owner", "created_at")

    extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password")
        vendor = Vendor(**validated_data)
        vendor.set_password(password)
        vendor.save()
        return vendor
#for single user
# 
# 
# 
# 
# 
# 
#  from .models import Vendor
# from rest_framework import serializers    


# class VendorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= Vendor
#         fields= '__all__'
#         read_only_fields = ["user", "created_at"]
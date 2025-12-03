# vendors/authentication.py
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from rest_framework import exceptions
# from .models import Vendor

# class VendorJWTAuthentication(JWTAuthentication):

#     def get_user(self, validated_token):
       
#         try:
#             vendor_id = validated_token['user_id']  # JWT payload should include vendor id
#             vendor = Vendor.objects.get(id=vendor_id)
#             return vendor
#         except Vendor.DoesNotExist:
#             raise exceptions.AuthenticationFailed('Vendor not found')
#         except KeyError:
#             raise exceptions.AuthenticationFailed('Invalid token')
# vendors/authentication.py
import jwt
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
from .models import Vendor

class VendorJWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get("Authorization")

        if not token:
            return None

        try:
            token = token.replace("Bearer ", "")
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Vendor token expired")
        except jwt.InvalidTokenError:
            raise AuthenticationFailed("Invalid Vendor token")

        vendor_id = payload.get("vendor_id")
        try:
            vendor = Vendor.objects.get(id=vendor_id)
        except Vendor.DoesNotExist:
            raise AuthenticationFailed("Vendor not found")

        return (vendor, None)

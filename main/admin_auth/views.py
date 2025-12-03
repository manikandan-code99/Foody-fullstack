# vendors/views.py
import jwt, datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .models import Vendor
from .serializers import VendorSerializer
from .authentication import VendorJWTAuthentication

class VendorCreateView(APIView):
    def post(self, request):
        serializer = VendorSerializer(data=request.data)
        if serializer.is_valid():
            vendor = serializer.save()
            return Response({"message": "Vendor created", "vendor": VendorSerializer(vendor).data}, status=201)
        return Response(serializer.errors, status=400)
    
class VendorLoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        try:
            vendor = Vendor.objects.get(username=username)
        except Vendor.DoesNotExist:
            return Response({"error": "Vendor not found"}, status=404)

        if not vendor.check_password(password):
            return Response({"error": "Invalid password"}, status=400)

        payload = {
            "vendor_id": vendor.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1),
            "iat": datetime.datetime.utcnow(),
        }

        token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

        return Response({"token": token, "vendor": VendorSerializer(vendor).data})








# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status, permissions
# from .models import Vendor
# from .serializers import VendorSerializer

# # Create vendor (owner must be authenticated)
# class VendorCreateView(APIView):
#     # permission_classes = [permissions.IsAuthenticated]

#     def post(self, request):
#         # Owner creates a vendor
#         serializer = VendorSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(owner=request.user)
#             # optionally mark user as vendor owner
#             if not request.user.is_vendor_owner:
#                 request.user.is_vendor_owner = True
#                 request.user.save(update_fields=["is_vendor_owner"])
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # List vendors for current owner
# class VendorLoginView(APIView):
#     # permission_classes = [permissions.IsAuthenticated]

#     def get(self, request):
#         qs = Vendor.objects.filter(owner=request.user)
#         serializer = VendorSerializer(qs, many=True)
#         return Response(serializer.data)




# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import Vendor
# from .serializers import VendorSerializer
# from django.contrib.auth.hashers import check_password

# class VendorCreateView(APIView):
#     def post(self, request):
#         restaurant_name = request.data.get("restaurant_name")
#         password = request.data.get("password")
#         username = request.data.get("username")

#         email = request.data.get("email")
#         gst_no = request.data.get("gst_no")
#         address = request.data.get("address")
#         storephone = request.data.get("storephone")

#         if not restaurant_name or not password:
#             return Response(
#                 {"error": "restaurant_name and password are required"},
#                 status=status.HTTP_400_BAD_REQUEST
#             )

#         vendor = Vendor(
#             restaurant_name = restaurant_name,
#             username = username,
#             email = email,
#             gst_no = gst_no,
#             address = address,
#             storephone = storephone,
#         )

#         vendor.set_password(password)  
#         vendor.save()

#         return Response(
#             {"message": "Vendor account created successfully"},
#             status=status.HTTP_201_CREATED
#         )


# class VendorLoginView(APIView):
#     def post(self, request):
#         # email = request.data.get("email")
#         restaurant_name= request.data.get("restaurant_name")
#         password = request.data.get("password")

#         if not restaurant_name or not password:
#             return Response(
#                 {"error": "Email and password are required"},
#                 status=status.HTTP_400_BAD_REQUEST
#             )

#         try:
#             vendor = Vendor.objects.get(restaurant_name=restaurant_name)
#         except Vendor.DoesNotExist:
#             return Response(
#                 {"error": "Vendor not found"},
#                 status=status.HTTP_404_NOT_FOUND
#             )

       
#         if not vendor.check_password(password):
#             return Response(
#                 {"error": "Invalid password"},
#                 status=status.HTTP_400_BAD_REQUEST
#             )

#         serializer = VendorSerializer(vendor)

#         return Response(
#             {
#                 "message": "Login successful",
#                 "vendor": serializer.data
#             }
#         )

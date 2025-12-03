# food/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
from admin_auth.authentication import VendorJWTAuthentication
from .models import FoodItem
from .serializers import FoodItemSerializer


class FoodItemListCreateView(APIView):
    authentication_classes = [VendorJWTAuthentication]
    def post(self, request):
        vendor = request.user
        data = request.data.copy()
        data["vendor"] = vendor.id

        serializer = FoodItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save(vendor=vendor)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def get(self, request):
        vendor = request.user
        foods = FoodItem.objects.filter(vendor=vendor)
        return Response(FoodItemSerializer(foods, many=True).data)
    
    
from rest_framework.generics import RetrieveUpdateDestroyAPIView

class FoodItemDetailView(RetrieveUpdateDestroyAPIView):
    authentication_classes = [VendorJWTAuthentication]
   
    serializer_class = FoodItemSerializer

    def get_queryset(self):
        vendor = self.request.user
        return FoodItem.objects.filter(vendor=vendor)

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import FoodItem
# from .serializers import FoodItemSerializer
# from admin_auth.authentication import VendorJWTAuthentication
# from rest_framework.permissions import IsAuthenticated

# class FoodItemListCreateView(APIView):
#     authentication_classes = [VendorJWTAuthentication]
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         # Get only food items of the logged-in vendor
#         vendor = request.user
#         foods = FoodItem.objects.filter(vendor=vendor)
#         serializer = FoodItemSerializer(foods, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         vendor = request.user
#         serializer = FoodItemSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(vendor=vendor)  # automatically assign vendor
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# # foodlist/views.py
# from rest_framework.generics import RetrieveUpdateDestroyAPIView

# class FoodItemDetailView(RetrieveUpdateDestroyAPIView):
#     authentication_classes = [VendorJWTAuthentication]
#     permission_classes = [IsAuthenticated]
#     serializer_class = FoodItemSerializer

#     def get_queryset(self):
#         # restrict queryset to only logged-in vendor's food items
#         vendor = self.request.user
#         return FoodItem.objects.filter(vendor=vendor)


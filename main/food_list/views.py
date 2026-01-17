from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import FoodItem
from .serializers import FoodItemSerializer


class FoodListPublicView(APIView):
    # No authentication required
    def get(self, request):
        foods = FoodItem.objects.filter(is_available=True)  # optional filter
        serializer = FoodItemSerializer(foods, many=True)
        return Response(serializer.data)
class FoodItemListCreateView(APIView):
   
    
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not request.user.is_vendor:
            return Response({"error": "Only vendors allowed"}, status=403)

        foods = FoodItem.objects.filter(vendor=request.user)
        return Response(FoodItemSerializer(foods, many=True).data)


    def post(self, request):
        if not request.user.is_vendor:
            return Response({"error": "Only vendors allowed"}, status=403)

        serializer = FoodItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(vendor=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
from rest_framework.generics import RetrieveUpdateDestroyAPIView

class FoodItemDetailView(RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = FoodItemSerializer

    def get_queryset(self):
        return FoodItem.objects.filter(vendor=self.request.user)






# # food/views.py
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status,permissions
# from admin_auth.authentication import VendorJWTAuthentication
# from .models import FoodItem
# from .serializers import FoodItemSerializer


# class FoodItemListCreateView(APIView):
#     authentication_classes = [VendorJWTAuthentication]
#     def post(self, request):
#         vendor = request.user
#         data = request.data.copy()
#         data["vendor"] = vendor.id

#         serializer = FoodItemSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save(vendor=vendor)
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)

#     def get(self, request):
#         vendor = request.user
#         foods = FoodItem.objects.filter(vendor=vendor)
#         return Response(FoodItemSerializer(foods, many=True).data)
    
    
# from rest_framework.generics import RetrieveUpdateDestroyAPIView

# class FoodItemDetailView(RetrieveUpdateDestroyAPIView):
#     authentication_classes = [VendorJWTAuthentication]
   
#     serializer_class = FoodItemSerializer

#     def get_queryset(self):
#         vendor = self.request.user
#         return FoodItem.objects.filter(vendor=vendor)

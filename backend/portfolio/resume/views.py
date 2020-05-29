from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import PassedMaterialSerializer
from .models import PassedMaterial

class PassedMaterialView(APIView):
    
    def get(self, request):
        materials = PassedMaterial.objects.all()
        serializer = PassedMaterialSerializer(materials, many=True)
        return Response(serializer.data)

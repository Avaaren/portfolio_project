from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Repository
from .serializers import PinnedAppsSerizalazer

class PinnedAppView(APIView):

    def get(self, request):
        repositories = Repository.objects.all()
        serializer = PinnedAppsSerizalazer(repositories, many=True)
        return Response(serializer.data)
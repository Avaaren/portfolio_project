from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import PinnedAppsSerizalazer, PinnedApps
from .parser import get_pinned_apps

class PinnedAppView(APIView):

    def get(self, request):
        obj = PinnedApps(get_pinned_apps())
        serializer = PinnedAppsSerizalazer(obj)
        return Response(serializer.data)
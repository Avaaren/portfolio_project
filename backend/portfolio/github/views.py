from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Repository
from .serializers import PinnedAppsSerizalazer
from .tasks import update_repos_table

class PinnedAppView(APIView):

    def get(self, request):
        s = update_repos_table.delay()
        repositories = Repository.objects.all()
        serializer = PinnedAppsSerizalazer(repositories, many=True)
        return Response(serializer.data)
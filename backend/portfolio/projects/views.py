from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ProjectSerializer
from .models import Project


class ProjectListView(APIView):
    '''Project list displaying'''
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
from rest_framework import serializers

from .models import Repository

class PinnedApps(object): 
    def __init__(self, apps): 
        self.apps = apps 

class PinnedAppsSerizalazer(serializers.Serializer):
    apps = serializers.ListField(child=serializers.ListField(child=serializers.CharField()))

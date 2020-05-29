from rest_framework import serializers

from .models import Repository


class PinnedAppsSerizalazer(serializers.ModelSerializer):

    class Meta:
        model = Repository
        fields = '__all__'

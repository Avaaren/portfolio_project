from rest_framework import serializers

from .models import Project, ProjectImage


class ProjectImageSerializer(serializers.ModelSerializer):
    '''Image serializer for image field in Project'''
    class Meta:
        model = ProjectImage
        exclude = ('project',)
    # Method for representing image as field in ProjectSerializer
    # def to_representation(self, value):
    #     return f'{value.image.url}'

class ProjectSerializer(serializers.ModelSerializer):
    '''Project list'''
    images = ProjectImageSerializer(source='image', many=True, read_only=True)
    class Meta:
        model = Project
        fields = '__all__'
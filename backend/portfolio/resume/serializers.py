from rest_framework import serializers

from .models import PassedMaterial, Technology

class TechnologySerializer(serializers.ModelSerializer):

    class Meta:
        model = Technology
        fields = '__all__'

class PassedMaterialSerializer(serializers.ModelSerializer):
    technology = TechnologySerializer(read_only=True)
    class Meta:
        model = PassedMaterial
        fields = '__all__'



from rest_framework import serializers
from .models import TestValue

class TestValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestValue
        fields = ['title', 'channel']


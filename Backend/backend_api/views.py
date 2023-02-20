from django.shortcuts import render
from rest_framework.views import APIView
from .models import TestValue
from .serializer import TestValueSerializer
from rest_framework.response import Response

class TestValueView(APIView):
    def get(self, request):
        output = [
            {
                'title': output.title,
                'channel': output.channel
            } for output in TestValue.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = TestValueSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


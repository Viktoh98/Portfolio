from django.http import FileResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from mimetypes import guess_type
from .models import Figure
from .api.serializers import FigureSerializer
from urllib.parse import quote
from django.http import HttpResponse


class FigureListView(ListAPIView):
    queryset = Figure.objects.all()
    serializer_class = FigureSerializer
    
    def get_serializer_context(self):
        return {'request': self.request}
    
  
import os  
class DownloadFileView(APIView):
    def get(self, request, owner_id):
        try:
            owner = Figure.objects.get(pk=owner_id)
        except Figure.DoesNotExist:
            return HttpResponse(status=404)
        resume_path = owner.resume.path
        file_type, _ = guess_type(resume_path)

        try:
            response = FileResponse(
                open(resume_path, 'rb'),
                content_type=file_type,
                as_attachment=True
            )
            return response
        except Exception as e:
            return e
        
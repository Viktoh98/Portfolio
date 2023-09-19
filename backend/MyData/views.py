from django.http import FileResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, get_object_or_404
from mimetypes import guess_type
from .models import Figure
from .api.serializers import FigureSerializer


class FigureListView(ListAPIView):
    queryset = Figure.objects.all()
    serializer_class = FigureSerializer
    
    
class DownloadFileView(APIView):
    def get(self, request, owner_id):
        owner = Figure.objects.get(pk=owner_id)
        resume_path = owner.resume.path
        file_type, _ = guess_type(resume_path)
        
        with open(resume_path, 'rb') as resume_file:
            response = Response(resume_file.read(), content_type=file_type)
            response['Content-Disposition'] = f'attachment; filename="{owner.resume.name}"'
            return response

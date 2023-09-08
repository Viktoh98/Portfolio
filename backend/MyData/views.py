from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Figure
from .api.serializers import FigureSerializer


class FigureListView(ListAPIView):
    queryset = Figure.objects.all()
    serializer_class = FigureSerializer

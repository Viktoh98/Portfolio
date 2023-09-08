from django.urls import path
from ..views import FigureListView

urlpatterns = [
    path('', FigureListView.as_view()),
]

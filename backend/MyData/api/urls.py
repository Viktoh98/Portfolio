from django.urls import path
from ..views import FigureListView, DownloadFileView

urlpatterns = [
    path('', FigureListView.as_view()),
    path('download-resume/<int:owner_id>/', DownloadFileView.as_view(), name='download_resume'),
]

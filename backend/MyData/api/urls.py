from django.urls import path
from ..views import FigureListView, DownloadFileView, CSRFTokenView, MessageCreateView

urlpatterns = [
    path('', FigureListView.as_view()),
    path('message/', MessageCreateView.as_view(), name='message_form'),
    path('download-resume/<int:owner_id>/',
         DownloadFileView.as_view(), name='download_resume'),
    path('csrf_token/', CSRFTokenView.as_view(), name='csrf-token'),
]

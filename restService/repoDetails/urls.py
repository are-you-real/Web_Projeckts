from django.urls import path
from .views import repo_list , repo_detail

urlpatterns = [
    path('repositories/', repo_list),
    path('repositories/<str:owner>/<str:repo_name>', repo_detail)
]

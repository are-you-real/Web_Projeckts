from django.urls import path
from .views import repo_list , repo_detail, instruction ##,  error404

#from django.conf.urls import ( handler400, handler403, handler404, handler500)
#handler404 = 'repoDetails.views.error404'

urlpatterns = [
    path('', instruction),
    path('repositories/', repo_list),
    path('repositories/<str:owner>/<str:repo_name>', repo_detail)
]

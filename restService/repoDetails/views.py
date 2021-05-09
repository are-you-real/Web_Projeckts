from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .separators import separatorRepo
import requests
import json


from rest_framework.exceptions import NotFound

# Create your views here.
def instruction(request):
    response = {
        "message": "That REST API serve just followed request  GET /repositories/{owner}/{repository-name} "
    }
    return JsonResponse(response, safe = False)

def repo_list(request):
    if request.method == "GET":
        gitData = requests.get('https://api.github.com/repos/octocat/hello-world')

        #separatorRepo(gitData)
        response = {
            "full_name" : str(gitData.json()['full_name']),
            "description" : str(gitData.json()['description']),
            "cloneUrl" : str(gitData.json()['url']),
            "stars" : gitData.json()['stargazers_count']
         }
        return JsonResponse(response, safe = False)

def repo_detail(request, owner, repo_name):
    gitData  = requests.get('https://api.github.com/repos/' + str(owner) +
        '/' + str(repo_name))
    if gitData.status_code == 404:
        return JsonResponse({"message": "Repo not Found"})

    if request.method == "GET":
        response =  {
            "full_name" : str(gitData.json()['full_name']),
            "description" : str(gitData.json()['description']),
            "cloneUrl" : str(gitData.json()['url']),
            "stars" : gitData.json()['stargazers_count']
         }
        return JsonResponse(response, safe = False)

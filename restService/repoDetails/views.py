from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
import requests
import json

# Create your views here.
def repo_list(request):

    if request.method == "GET":
        response = requests.get('https://api.github.com/repos/octocat/hello-world')
        newJson = {
            "full_name" : str(response.json()['full_name']),
            "description" : str(response.json()['description']),
            "cloneUrl" : str(response.json()['url']),
            "stars" : response.json()['stargazers_count']
         }
        return JsonResponse(newJson, safe = False)

def repo_detail(request, owner, repo_name):
    response = requests.get('https://api.github.com/repos/' + str(owner) +
        '/' + str(repo_name))
    if response.status_code == 404:
        return JsonResponse({"message": "Repo not Found","status" : 404})

    if request.method == "GET":
        newJson = {
            "full_name" : str(response.json()['full_name']),
            "description" : str(response.json()['description']),
            "cloneUrl" : str(response.json()['url']),
            "stars" : response.json()['stargazers_count']
         }
        return JsonResponse(newJson)

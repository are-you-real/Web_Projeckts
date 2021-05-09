
def separatorRepo(data):
    separatedData = {
        "full_name" : str(gitData.json()['full_name']),
        "description" : str(gitData.json()['description']),
        "cloneUrl" : str(gitData.json()['url']),
        "stars" : gitData.json()['stargazers_count']
    }
    return separatedData

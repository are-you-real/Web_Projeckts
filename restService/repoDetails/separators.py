
def separatorRepo(data):
    separatedData = {
        "full_name" : str(data.json()['full_name']),
        "description" : str(data.json()['description']),
        "cloneUrl" : str(data.json()['url']),
        "stars" : data.json()['stargazers_count']
    }
    return separatedData


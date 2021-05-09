# About program
- Language: Python
- Frameworks: Django, Django Rest Framework

# How to run locally 
1. In terminal go to the program directory `...\restService>`
2. Run server by command `python manage.py runserver`
3. In your browser, go to http://127.0.0.1:8000/repositories/{owner}/{repository-name}
> -  {owner} and {repository-name} have to exists in https://developer.github.com/v3/ rest API 
 
# How to deploy on Heroku
Requirements: 
- Git and Heroku installed
- account on Heroku

1. In terminal login in Heroku using command `heroku login`
2. In terminal go to the program directory `...\restService`
3. Initialize local repository, add and commit changes:
> - `git init`
> - `git add .`
> - `git cmommit -m "Commit coment"`
4. Creates a new empty application on Heroku `heroku create {host_name}`
5. In `...\retsService\settings.py` add a name of your host to array e.g. "excample.com"
6. Use the `git remote -v` command to confirm that a remote named heroku has been set for your app
7. Finally deploy the code by `git push heroku main`

## Before deploying
> You can change the value of `SECURITY_KEY` and `DEBUG` to `os.environ.get('SECRET_KEY')` and  `(os.environ.get('DEBUG_VALUE') == 'True')` 
  and add the variables with values to Environment Variables

# Django + React + Livereload Development Setup

## TECH
- Django
- React
- Livereload
- ENV Variables

## LIVERELOAD STEPS
- Add `django-livereload-server==0.3.2` to requirements.txt
- Settings.py
  - In INSTALLED_APPS add 'livereload' just before 'django.contrib.staticfiles'
  - Add 'livereload.middleware.LiveReloadScript' to MIDDLEWARE
- Start django server: python manage.py runserver
- Start livereload: python manage.py livereload
  - *Quick note: If reload doesn't start automatically you can hard refresh the browser and it should start reloading

## ENV SETUP STEPS
- Create a .env file inside Django root directory (same as manage.py)
- Add the following to Settings.py
```python
import environ
import os

# set casting, default value
env = environ.Env(DEBUG=(bool, False))
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
environ.Env.read_env(env_file=os.path.join(BASE_DIR, '.env'))

# Use it like this
env('DEBUG')
```
# Django Data/Models Basics

## Basic Declaration
- Create models.py file for app
- Add models
- Django will generate migrations to run against the database based on the models you create and thge changes you make
- Add the following:
```python
from django.db import models

class MyModel(models.Model):
  # definition
```

## Fields
- Use model field ref: https://docs.djangoproject.com/en/3.2/ref/models/fields/
- Determine the field you want to use
- Set all required args and any optional ones you want to set
- Add defaults
- Add validators like: `from django.core.validators import MinValueValidator, MaxValueValidator`
  - See: *https://docs.djangoproject.com/en/3.2/ref/models/fields/#validators*
- *Auto increment id field is added to every django model automatically
- Example:
```python
class Book(models.Model):
  # definition
  title = models.CharField(max_length=100)
  rating = models.IntegerField()
```

## Run Migrations
- Add app to INSTALLED_APPS array in project settings.py file
- After changing or adding models you must
  - Create new migrations: `python manage.py makemigrations`
  - Run the migrations: `python manage.py migrate`
- *If your app doesn't already have migrations dir and __init__.py file inside you must create them or django won't pick up the changes*

## Work with models in interactive shell
- `python3 manage.py shell`
- Get access to a model: `from app_name.models import ModelName`
- Get all objects: `ModelName.objects.all()`
  - What's printed here is defined in the built-in method `__str__()` on every class
  - You can override this in the models definition by return a string in the methods body
- Get object by id: `ModelName.objects.all()[index]`

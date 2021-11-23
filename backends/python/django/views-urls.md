# Django Views & URL Basics

### Info
- A view is a python function
- You can have multiple "apps" in a django project. An app is a directory

### Directions
- Add app folder in the root directory if you haven't already (ex. main)
- Add urls.py file to to the app folder you're working on and add the following:
```python
from django.urls import path, include
from . import views

urlpatterns = [
  path('somepath', views.refViewName)
]
```
- Add views.py file and add the following:
```python
from django.http.response import HttpResponse
from django.shortcuts import render

def path(request):
  return HttpResponse('Hello World!')
```
- Then in the folder named after the overall project in it's urls.py add the following:
```python
from django.urls import path, include

# Add the base path and ref the urls of the app in urlpatterns
# Remember to add the trailing slash
path('basepathforapp/', include('main.urls'))
```

## Dynamic Path Segments & Captured Values
- Create a new view in your app's views.py file
- Pass the view a request object and an identifier that will match the urls.py
- Inside the view use if statements to check the identifier and render the correct view
- Example:
```python
def nameOfView(request, identifier):
  text = None
  if identifier == 'hello':
    text = 'Hello!'
  elif identifier == 'goodbye':
    text = 'Goodbye!'
  else:
    return HttpResponseNotFound('identifier not supported')
  return HttpResponse(text)
```
- In the urls.py add
```python
path('<identifier>', views.nameOfView)
```

### Path Converters
- You can convert values to different types (most importantly strings or numbers)
```python
path('<str:identifier>', views.nameOfViewStr)
```
- You would add multiple paths with the same identifier name but different types referring to different views

### Working with dictionary of paths
- Create an object with the path text and the data for the view
- Use that object as a list in a specific view
- The variable passed could be an integer in this case which would allows to use the list's keys to match a int paramter with an actual path
- Then you can redirect to the path itself
- *Rememeber lists in python are indexed at 0
- Example (dynamic_views is the object):
```python
def dynamicViewInt(request, identifier):
  views = list(dynamic_views.keys())
  if identifier > len(views):
    return HttpResponseNotFound("Invalid identifier")
  redirect_view = views[identifier - 1]
  return HttpResponseRedirect(redirect_view)
```

## Redirects
- Redirect in a view using:
```python
return HttpResponseRedirect(redirect_path)
```
# Python Virtual Environments

## Helpful Links
- https://realpython.com/python-virtual-environments-a-primer/

## Basics
- Purpose: to allow different projects to use different versions of 3rd party deps
- virutalenv is the older version
- venv is the newer version and it's built-in to the standard python library (use this one)
- Under the hood all venv is doing is setting the PATH variable to be prefixed with the directory created when we create our virtual environment so executables are used from our venv directory instead of the base system

## venv
- Create new virtual env: `python3 -m venv name`
- Activate it: `source env/bin/activate`
- Deactivate it: `deactivate`
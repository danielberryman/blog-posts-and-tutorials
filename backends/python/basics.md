# Python Basics

## Helpful Links
- https://realpython.com/tutorials/basics/
- https://realpython.com/python-first-steps/

## Common built-ins
- print()
  - Takes a string/the equivalent of console.log in js

## Syntax

### Comments
- `var = "Hello World" # write your comment`
- 72 characters or less so keep them short

### Variables
- Use snake_case
- Now offer full unicode support so you can use characters like π

### Keywords
- See all keywords in python repl type: `help("keywords")`
- Or: `import keyword` and then `keyword.kwlist`

### Conditionals
- if expression:
      `# run code`
- elif expression:
      `# run code`
- else:
      `# run code`

### Loops
- Uses the break and continue statements
- for loop for definite iteration
```python
for loo_var in iterable:
    # run code`
else: # This is optional and usually only used when the for loop uses a break statement
    # run is no break statement is used during the iterable
```
- while loop for indefinite iteration
```python
while expression:
    # do something
else:
    # do something when the expression evals to false
```

### Functions
- Defining a functions
```python
def function_name(arg1, arg2, ...):
    # Do something
    return value
```
- Call `function_name()`

### Error handling
- Python favors handling exceptions as opposed to using if statements

### Getting help with python
- REPL: `help()`

### Try catch
```python
try:
  # do something
except:
  # do something else
```

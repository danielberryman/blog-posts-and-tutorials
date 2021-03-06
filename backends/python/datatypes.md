# Datatypes In Python
In this page you'll find details on datatypes as well as type hints.

## Helpful Links
- https://fastapi.tiangolo.com/python-types/

## Type Hints
- Purpose: to give you better support for autcompletion and error checking in you IDE
- Main use case: with function parameters
- Syntax: `def function_name(arg1: str)` here the `: str` is the type hint
- Simple Types: str, int, bool, float, bytes
- Generic and Internal Types
  - Import List, Set, Tuple and Dict from the built-in `typing` library
  - `from typing import List, Set`
  - Then you can set the internal types with square brackets and comma delimited list
  - `def function_name(arg1: List[str], arg2: Tuple[int, int, str])`
  - For Dict you set 2 type parameters `Dict[float, str]`
- Optional (also a Generic)
  - imported from `typing` as well
  - Optional ensures the type is whatever internal type you declare or the type `None`
  - Example `def function_name(arg1: Optional[str])`
- Classes
```python
class Person:
    def __init__(self, name: str):
        self.name = name


def get_person_name(one_person: Person):
    return one_person.name
```

- Number
  - Integer
    - `int()` returns an integer
    - int(False) returns 0 and int(True) returns 1
  - Floating Point
    - Use `float()` to convert integers and string to floating point numbers
    - You can't convert a compelx number to a float
  - Complex (real and imaginary like "1+2j") 
  - Operators
    - + - * /
    - // is floor division
    - 5 % 3 is modulus
    - 5 ** 3 is to the power of
  - Methods
    - .is_integer() returns a boolean
    - .bit_length()
    - For integers you need to wrap an int literal is parentheses: (10).some_method
- Boolean
  - Values are: True or False
  - Operators: < > <= >= == !=
  - bool() method: pass it a value and it returns a boolean
    - Built in objects that are False:
      - None and False constants
      - 0, 0.0, 0j, Decimal(0), Fraction(0,1)
      - Empty sequences: '', (), [], {}, set(), range(0)
- String
  - Define with single, double, or triple quotes
  - Use \ to escape quotes
  - + operator is used to concat
  - Built-in methods
    - len() return length of string passed to it
    - .join([array of strings]) -> This method is called on a string that acts as the separator
    - upper(), lower()
    - .format is good for injecting values: "My name is {0} and I'm {1} years old".format(name,age)
      - Try f-string format as well which is the above variables with: 
      - `f"My name is {0} and I'm {1} years old"`
    - Retrieve chars with index
      - "string" -> "string"[0] returns "s" while string[-1] returns "g"
    - Slice a string using "string"[1:2] returns "t" because the second number is exclusive
      - Form is [start:end:step] so "string"[0:3:2] returns "sr"
- List
  - These are arrays []
  - Also allow finding values with negative index values
  - Slice the same way using [start:end:step]
  - + operator to concat arrays
  - len(array) lists the number of elements in the list
  - Built in methods
    - Add to end of list: .append()
    - Sort: sort()
    - Remove from the caller and return el: .pop(index)
- Tuple
  - Lists but they're immutable
  - Defined with parentheses
  - Use indicies to retrieve only specific items: ("Daniel","Grace")[0:1] gets "Daniel"
  - Concat with +
  - len(tuple)
  - list(tuple) to return the tuple as a list
  - Built in methods
    - .count() returns the number of times item appears in the underlying tuple
    - .index() returns index of the first instance of the match
- Dictionary
  - A sort of associative array which an object of key/value pairs
  - Define literal { key: value } or dict(key=value,key=value,...)
  - Retrieve values: dictname[key]
  - Dictionaries are ORDERED
  - Built ins
    - .keys() just the keys
    - .values() just the values
    - .items() k/v pairs
- Sets
  - Mutable UNORDERED data structure
  - { 1, 2, 3 }
  - set([1,2,3])
  - Operations
    - Union: |
    - Intersection: &
    - Difference: -
  - Built ins
    - Add: .add()
    - Remove: .remove()
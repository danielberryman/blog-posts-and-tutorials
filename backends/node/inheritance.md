# Inheritance in Node

## Inheriting from the event emitter
- In the node utils module there’s a method named “inherits”
- It takes 2 constructors: one upon which you want to add new methods and properties; and one where the properties and methods you want to add to the other are currently sitting
- Have to call this first before you add other properties and methods to your prototype
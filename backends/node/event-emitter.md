# Node Event Emitter

## 2 different kinds of events in Node:
- System events which come from the C++ Core from the library libuv (events coming from the computer)
- Custom events which are inside the JS Core that deals with events that the developer creates (The is the Event Emitter inside the JS Core)
- *JavaScript is faking events. There nothing native in JavaScript like an Event Object.*

## Inheriting from the event emitter
- In the node utils module there’s a method named “inherits”
- It takes 2 constructors: one upon which you want to add new methods and properties; and one where the properties and methods you want to add to the other are currently sitting
- Have to call this first before you add other properties and methods to your prototype

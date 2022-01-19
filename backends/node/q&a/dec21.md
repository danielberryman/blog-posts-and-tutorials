*I use Quizlet to do flashcards. I import these q/a and set the | character as the delimiter.*

### QUESTIONS & ANSWERS
What is V8 and what does it do?|JavaScript engine meaning a program that parses JavaScript and can translate it to machine code
What language is V8 written in?|c++
What is Node JS?|An program that extends V8 to allow for developers to have access through JavaScript to lower level features available in c++
What language is chrome written in?|c++
What are some examples of features chrome implements that aren't a part of the ECMAScript Standard?|DOM manipulation, ajax, jQuery
What's are the core of Node?|The c++ core which is V8 and the Javascript core that mostly consists of wrappers around the same c++ features but includes useful utility functions as well
How do you run a file with node?|node file.js
What npm package is great for hotreload in node? | nodemon
What are classes in JavaScript?|A variant of functions
How do you declare a method on an object constructor function?|Use ConstructorName.prototype.yourFnName = function() {}
What are all the ways to invoke a function?|(), call, apply?
What is basic structure of the EventEmitter in nodes?|It’s a function constructor that has an events property which holds key value/pairs of an event type and an array of functions to call when that event type is emitted. When a listener is added to the emitter you declare the type and the listener function
What module do you need to require to use the node event emitter?|require(‘events’)
What are magic strings?|When you rely on strings to be the basis of logic in your code (as opposed to using a variable)
What’s good strategy for staying away from using magic strings?|Create an object/module where you import variables associated with the values/strings you want to use. By importing them you don’t need to worry about typos and you get built in IDE support for code completion and typos
Describe how you can use an object literal to set the prototype of various object instances|Declare object instance by using Object.create(objLiteral) and passing in your object literal. The obj instance will be empty but will have access to properties and methods declared on the obj literal since the obj instance has the obj literal as it’s prototype
What is a function constructor?|Functions that will return an empty Object automatically, makes use of the this keyword, available via the new keyword
Objects passed to a function in JS are passed by…|reference
Primitives passed to a function in JS are passed by…|value
What is returned by the require statement?|module.exports
What is the parameter of the require function?|path
What types of files can require statement load?|js, json, node
How do you export a function from a module using ES6 syntax?|place export keyword before the function
How do you import all exports from a module using ES6 syntax?|import * as something from ‘./path/to/module’
Module Export Patterns | 
```javascript
module.exports = function() { do something }

module.exports.greet = function() { do something }

// Create a new object. Replace module.exports with the object. This creates a Global obj referenced anytime the module is imported. Use new keyword
function Greetr() { do something }
module.exports = new Greetr();

// Returns the object definition but not an instance
function Greetr() { do something }
module.exports = Greetr;

function greet() { do something }
module.exports = {
  greet: greet
}
```

JS is synchronous? or asynchronous? | Synchronous (the V8 engine)
Node is synchronous? or asynchronous? | Asynchronous (V8 engine is only 1 process that Node is running)
What do .call() and .apply() allow you to do? | Pass in and set the value that the "this" keyword points to in the fn.
If nothing is passed to .call() and .apply() what will the value of the "this" be in the fn? | undefined
What's the diff between .call() and .apply()? | How you pass params: call takes a comma separated list; apply takes an array
Don’t forget to do what at the top of your file? | 'use strict';
What are callbacks simply? | Functions you pass to other functions that you expected to be invoked later
What is the libuv module? | Module that handles System Events (part of the c++ core)
What module handles System Events in node? | Libuv

---------------

Buffer
- temporary holding spot while moving data from one place to another. It’s a spot in memory intentionally limited in size
- Hold raw binary data
- It’s a global object so no need to import it
- They a set length. They do not expand or truncate.
- When creating them you can the character encoding
- Methods: write(), toString(), toJSON(), among others
Stream
- sequence of data made available over time
- These smaller pieces of data are a set size and referred to as chunks
Often we use a buffer to collect what’s coming in on a stream

Pipes
- builds on the idea of streams
- How you connect 2 streams
- Pipe from a readable stream to a writable stream
- You connect more than 2 streams as long as you keep passing to writable streams

Character sets vs Encodings
- character sets match a language character to a number
- Encodings determine how a number is stored in memory (I.e. how many bits are used UTF8 as an example)
- JavaScript isn’t great at handling binary data (the encoding part) but node provides ways to help JS with that

ES6 and Binary Data
- Node provides its own Buffer object because JS used to not be very good at working with Binary data
- With ES6 JS is getting better by introducing typed arrays (for example an Int32Array)
- What you can do is use the JS ArrayBuffer which is a buffer and then store it in a typed array. Then you can interact with the typed array to interact in a specific way with the buffer via the typed array. 
- For example if you had a buffer in an Int32Array you could store 2 numbers inside the buffer via the typed array by doing typedarray[0] = someNumber and typedarray[1] = someOtherNumber

Where does __dirname come from?

Error-First Callbacks
- This just means the first parameter in your callback functions is assumed to be the error

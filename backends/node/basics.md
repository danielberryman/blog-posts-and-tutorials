Synchronous/Asynchronous
- JavaScript is synchronous (the V8 engine)
- Node is asynchronous. The V8 engine is only 1 thing that Node is running.

Call vs Apply
- Both allow you change what the “this” keyword points to. If nothin is passed in then anything referencing “this“ will be undefined. It doesn’t fall back at all. If nothing is passed in then “this” is undefined.
- The difference between them is that after the this object is defined is how you pass parameters. With call you pass them as a comma separated list and with apply you pass them as an array

Don’t forget ‘use strict’ at the top of your file

Callbacks
- functions you pass to functions that you expect to be invoked later on

LIBUV
- System Events inside the C++ core are handled by a c++ library called Libuv

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
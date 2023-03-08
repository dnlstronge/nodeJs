/* Event Driven Programming in NODE */

const EventEmitter = require("events");

// if you want custom you need to extend the EventEmitter class above

const customEmit = new EventEmitter();

// there are many methods on this, very useful are "on" & "emit"

// on = listen for an event
// emit = emit an event


// subscribe - can have as amny as you like.
customEmit.on("response", (name, age) => {
    console.log(`data received name: ${name} age: ${age}`)
})
// e.g: 
customEmit.on("response", () => {
    console.log(`some other logic here`)
})

// then emit
customEmit.emit("response", "john", 34)

// remember order here matters!!! can't emit an event before listening to it
// you can pass different params into the on function,
// these can be added as values inside emiit.  
// on tells customEmit how to emit, emit tells customEmit if and what to emit
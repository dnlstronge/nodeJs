/* Event Driven Programming in NODE */

const EventEmitter = require("events");

// if you want custom you need to extend the EventEmitter class above

const customEmit = new EventEmitter();

// there are many methods on this, very useful are "on" & "emit"

// on = listen for an event
// emit = emit an event

customEmit.on("response", () => {
    console.log(`data received`)
})
customEmit.emit("response")
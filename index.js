const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log("itchy tasty!!")
})
eventEmitter.on("breakfast", () => {
    console.log("Scratchy itchy tasty....")
})

eventEmitter.emit('lunch');

eventEmitter.emit("breakfast")

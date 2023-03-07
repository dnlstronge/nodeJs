// event loop examples


// set interval is aync, so in this case every 2 secs the callback is invoked again by event loop
setInterval( () => {
    console.log("Hiya Georgie!!") // (2 ++ every 2 secs thereafter)
}, 2000)

console.log("Don't ya wanna-balloon?") // (1)

// this procees does not exit, requires that I kill terminal
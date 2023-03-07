// taking a look at event loop in action
// I'll order the number in which the tasks get executed

const { readFile } = require("fs")
// (1)
console.log("log first start task");

readFile("./content/first.txt", "utf8", (err, result) => {
    if(err) {
        console.log(err.message)
        return
    }
    // (3)
    console.log(result)
    console.log("second task completed")

})

// (2)
console.group("starting next task")

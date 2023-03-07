// taking a look at event loop in action
// I'll order the number in which the tasks get executed
// readFile is async and this is an example of offloading

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
    console.log("next task completed")

})

// (2)
console.group("starting next task")

// sync: blocking
// async: non-blocking


const { readFileSync, writeFileSync, readFile } = require("fs");

// takes to args: path and encoding:

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
const third = readFileSync("./content/third.txt", "utf8");

console.log(first, second, third);

// okay now create a newfile using write: 
// two args, path (if it does not exist Node will create), "value"

writeFileSync("./content/third.txt", "As I nodded nearly napping....");

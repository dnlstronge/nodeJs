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

// if you just want to append, writeFileSync takes one more argument: 
// an options object with the property flag: a == append

writeFileSync("./content/third.txt", "suddenly there came a tapping....", {flag: "a"});

// again: 

writeFileSync("./content/third.txt", "...as if someone gently rapping......rapping at my chamber door", {flag: "a"});

// and once more: 

writeFileSync("./content/third.txt", "....tis some late visitor I muttered, entreating entrance at my chamber door....this it is and nothing more", {flag: "a"});



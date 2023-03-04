const path = require("path"); 

console.log(path.sep)

// join 
// log the filepath
const filePath = path.join("/content", "subfolder", "test.txt")

console.log(filePath);

/* outputs: /content/subfolder/test.txt */
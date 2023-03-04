const path = require("path"); 

console.log(path.sep)

// join 
// log the filepath
const filePath = path.join("/content", "subfolder", "test.txt")

console.log(filePath);

/* outputs: /content/subfolder/test.txt */

/* even if you add to this it will be removed e.g:  */

const filePath2 = path.join("/content", "//subfolder", "/test.txt")

console.log(filePath2) // returns the same as filePath



// if I just wanted the file using the filepath
const base = path.basename(filePath);

console.log(base)
// sync: blocking
// async: non-blocking


const { readFileSync, writeFileSync, readFile } = require("fs");

// takes to args: path and encoding:

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);
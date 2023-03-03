const { readFile } = require("fs").promises;

async function heelo() {
const txt = await readFile("./HelloMate.txt", "utf8")
}
;

heelo()
console.log("Working")
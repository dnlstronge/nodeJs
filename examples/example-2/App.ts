

const names: {dave: string; steve: string; } = require("./testModule.js")
const sayHi = require("./testFunc.js")
// const hello = require("./testFunc.js")

// modules => encapsulated code - shares only the minimum
// every file in node is a module
console.log(names.steve)


sayHi(names.steve)

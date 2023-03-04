const os = require("os")

// info about current user: 
const user = os.userInfo()
console.log(user);

// get info about how long machine has been running

const runTime = os.uptime()

console.log(runTime);

console.log(Number((runTime / 1000 / 60).toFixed(2))) // mins
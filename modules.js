const os = require("os")

// info about current user: 
const user = os.userInfo()
console.log(user);

// get info about how long machine has been running





const output = () => {
     let upTime = os.uptime()
     return `The system has been running for ${upTime} seconds or ${upTime / 60} minutes`
}

console.log(output()) // mins
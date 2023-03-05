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

// log data about the OS: 



const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)
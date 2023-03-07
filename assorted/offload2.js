// another example, 



console.log("one"); //(1)


// setTimeout is async --- it completes after, so the console log for two, is actually logged 3rd
setTimeout(() => {
    console.log("two") //(3)
}, 0)
console.log("three") //(2)

// the important thing to remember here is that async = offloaded
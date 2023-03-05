/* Create a simple counter which increments by 1 each second and log this to console */

let counter: number = 0



setInterval(() => {
    counter = counter + 1
    console.log(counter)
}, 1000);


// modules => encapsulated code - shares only the minimum
// every file in node is a module

const dave = "Dave"
const steve = "Steve"

const sayHi = (name: string) => {
    console.log(`Hi there....${name}, ${dave} and ${steve}`)
}

sayHi("Dan")
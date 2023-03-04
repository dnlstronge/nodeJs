import daves from "./new-module.js";

const name = daves.person;
let numero = 0
const myFunction = () => {
    numero = 55
}

if(name === "dave") {
    myFunction()
    console.log(numero)
} else {
    console.log("the name isn't dave")
}

console.log(name);


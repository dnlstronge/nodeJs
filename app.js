const arr = [1, 2, 3, 4, 5, 6];
const str = "Good Morning Y'all";
const boolfool = true;

const testme = (a, b) => {
    a = arr;
    b = str;
    if(boolfool) {
console.log(`${a} is an array, followed by a string: ${b}`)
    };
};

testme();

const _ = require("lodash");

// create an array of arrays: 

const items = [[1, 2, 4], [1, 4], [7, 4, 2]];

// use flattendeep on the array(s):

const FD_items = _.flattenDeep(items);

// compare the two: 

console.log(items);
console.log(FD_items);



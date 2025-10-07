

// String Template Literals

const myname = "Max"

// console.log(`Sum of 1 2 and 3 is ${1 + 2 + 3}, Name: ${myname}`);


// ----------------- funtions -----


function greet(name) {
    console.log(`Hello from ${name}`);
}

greet("Max");

function squareRoot(num) {
    return num ** 0.5;
}

// console.log(squareRoot(100));
// console.log(squareRoot(49));




// Function Expressions

// const addition = function(x, y) {
//     return x + y;
// }


// Arrow functions - Syntactical Sugar
// const addition = (x, y)=> {
//     return x + y;
// }

// Arrow function Implicit Return 

const addition = (x, y)=>  x + y;


// console.log(addition(10, 4));



// const cube = function(num) {
//     return num ** 3;
// }

// Arrow function

const cube = (num) => num ** 3;


console.log(cube(3));
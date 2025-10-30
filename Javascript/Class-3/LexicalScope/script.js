
// let a = 100;

// function greet() {

//     let b = 200;

//     // innerGreet is lexically inside greet function
//     function innerGreet() {
//         console.log(b);
//     }

//     innerGreet();
// }

// console.log(a);

// greet();


// Global Scope => Anything which is not inside of any other function

const name = 'Sarah';

function sayName() {
    console.log(name);
}

function print() {
    const name = 'Max';
    sayName();
    console.log(name);
}

print();


/*

    function sayName(x,y){
        return z;
    }

    `sayName` is a HOF if x,y or z are also functions.
*/





/*
    Write a functions to compute
        - area corresponding to each radius - PI * radius * radius
        - circumference to each radius - 2*PI*radius
        - diameter to each radius - 2*radius
*/

// DRY - DO NO REPEAT YOURSELF
// WET - WRITE EVERYTHING TWICE

const radii = [1, 2, 3, 4, 5, 6, 7, 8];

function calculateArea(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(Math.PI * radius * radius);
    }
    return res;
}

function calculateCircumference(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(2* Math.PI * radius);
    }
    return res;
}

function calculateDiameter(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(2* radius);
    }
    return res;
}

// console.log(calculateArea(radii));
// console.log(calculateCircumference(radii));
// console.log(calculateDiameter(radii));

// pure functions
function calculate(radii, logic) {
    const res = [];
    for (let radius of radii) {
        res.push(logic(radius))
    }
    return res;
}

// callback functions
const area = radius => Math.PI * radius * radius;

const cicumference = radius => 2 * Math.PI * radius;

const diameter = radius => 2 * radius;

console.log(calculate(radii, area));
console.log(calculate(radii, cicumference));
console.log(calculate(radii, diameter));




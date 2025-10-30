/*
    const students = [
            { name: "Alice", score: 92 },
            { name: "Bob", score: 80 },
            { name: "Charlie", score: 60 },
            { name: "Max", score: 95 },
    ];

    Write a function that groups them into categories:
    "A" (90-100)
    "B" (75-89)
    "C" (below 75)

    Return an object like:
    {
        A: ["Alice", "Max"],
        B: ["Bob"],
        C: ["Charlie"]
    }

*/

const fruits = ['apple', 'banana', 'orange'];

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for-of loops to be used only on iterable object, and it is a decalrative way of writing loops
// iterable objects are basically which have iterator protocol implemented
// iterable objects : string, map, set, arrays

// for (const fruit of fruits) {
//     console.log(fruit);
// }

const car = {
    name: 'BMW',
    topSpeed: 300,
    color: 'red'
}

for (let prop in car) {
    console.log(`${prop}----> ${car[prop]}`);
}

// console.log(car.name);
// console.log(car["color"]);
// console.log(car["topSpeed"]);



function classifyStudents(students) {
    const classified = {
        A: [], B: [], C: []
    };
    students.forEach(student => {
        if (student.score >= 90 && student.score <= 100) {
            classified.A.push(student.name);
        } else if (student.score >= 75 && student.score <= 89) {
            classified.B.push(student.name);
        } else {
            classified.C.push(student.name);
        }
    });
    return classified;
}

function classifyStudentsImproved(students) {
    const groups = {
        A: [], B: [], C: []
    };
    for(const student of students){
        if (student.score >= 90 && student.score <= 100) {
            groups.A.push(student.name);
        } else if (student.score >= 75 && student.score <= 89) {
            groups.B.push(student.name);
        } else {
            groups.C.push(student.name);
        }
    };
    return groups;
}

const students = [
            { name: "Alice", score: 92 },
            { name: "Bob", score: 80 },
            { name: "Charlie", score: 60 },
            { name: "Max", score: 95 },
    ];



console.log(classifyStudentsImproved(students));


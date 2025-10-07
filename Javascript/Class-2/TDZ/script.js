
// console.log(a);

// let a = 100;

// function fun() {
//     console.log('Inside fun');
// }

// fun();

// ---------------- TDZ depend upon time of execution ----------


function printUsername() {
    console.log(username);
}

let username = "max";

printUsername();


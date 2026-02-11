const name = 'Max';

function greet() {
    console.log(`Hello from ${name}`);
}

greet();

class Car{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const c1 = new Car('BMW', 10000);

console.log(c1);

const p1 = Promise.resolve(100);

p1.then((val) => console.log(val))
    .catch((err) => console.log(err));




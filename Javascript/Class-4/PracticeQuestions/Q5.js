/*

    Q5 Write a function createCounter(start) that returns an object with:
        - increment(): increases count.
        - decrement(): decreases count.
        - reset(): resets to initial value.

*/

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    function reset() {
        count = 0;
        return count;
    }

    return {
        increment, 
        decrement,
        reset
    }
}

const counter = createCounter();

console.log(counter.increment()); //1
console.log(counter.increment()); //2
console.log(counter.increment()); //3
console.log(counter.decrement()); //2
console.log(counter.reset()); //0
console.log(counter.increment()); //1
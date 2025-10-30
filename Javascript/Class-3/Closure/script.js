function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    function decrement() {
        count--;
        console.log(count);
    }

    return { increment, decrement };
}

// {increment function - count: 3 }
const counter1 = createCounter();
counter1.increment(); //1
counter1.increment(); //2
counter1.increment(); //3
counter1.increment(); //4




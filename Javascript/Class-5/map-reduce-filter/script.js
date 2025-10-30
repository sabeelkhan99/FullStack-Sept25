// ------------------------------------ map ------------------
// const nums = [1, 2, 3, 4, 5, 6];

// function square(num) {
//     return num ** 2;
// }

// const squareOfNums = nums.map(square);

// console.log(nums);
// console.log(squareOfNums);

// const cubeRootOfNums = nums.map((num, idx, arr) => {
//     // console.log(idx);
//     return Math.cbrt(num);
// })

// console.log(cubeRootOfNums);

/*
    You are given a transaction array treat the transaction amount in rupees, and convert those amounts 
    into dollars and conversion rate is also provided to us.

    const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
    const inrtToUsd = 80;

*/

// const rate = 80;

// function inrtToUsd(amount) {
//     return amount / 80;
// }

// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

// const amountInDollars = transactions.map(inrtToUsd);

// console.log(amountInDollars);


// -------------------------------------------filter ----------------

// function isEven(num) {
//     return num % 2 === 0;
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNums = nums.filter(isEven);

// console.log(evenNums);

// const oddNums = nums.filter((num) => !isEven(num));
// console.log(oddNums);

// const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];

// const positiveAmounts = transactions.filter((amount) => amount > 0);

// console.log(positiveAmounts);

// ------------------------------reduce---------------

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = nums.reduce((acc, curr) => {
//     return acc + curr;
// }, 10);

// console.log(sum);

// const cart = [
//     {
//         title: 'Iphone',
//         price: 100,
//         qty: 2,
//     },
//     {
//         title: 'Ipad',
//         price: 200,
//         qty: 3,
//     },
//     {
//         title: 'Macbook',
//         price: 300,
//         qty: 2,
//     },
// ];

// const totalAmount = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

// console.log(totalAmount);


// veg menu => item should not contain chicken or egg
// jain menu => shoub be veg && item should not contain onion garlic


const menu = [
    "Tikka Butter Masala",
    "Chicken Biryani",
    "Kadhai Paneer",
    "Tiramisu",
    "Kofta",
    "Egg Biryani",
    "Egg Curry",
    "Dal Makhni",
    "Shahi Paneer",
    "Onion Rings",
    "Baklawa",
    "Garlic Naan",
    "Onion Pizza",
    "Garlic Bread",
    "Fish Fry",
    "Ramen",
    "Sushi",
    "Pirahan",
    "Paneer Butter Masala",
    "Momos"
]

function isVeg(food) {
    if (food.toLowerCase().includes('chicken')
        || food.toLowerCase().includes('egg') || food.toLowerCase().includes('fish')) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    if (food.toLowerCase().includes('onion') || food.toLowerCase().includes('garlic')) {
        return false;
    }
    return true;
}

const vegMenu = menu.filter(isVeg);
const jainMenu = vegMenu.filter(isOnionGarlicFree);
const nonVegMenu = menu.filter((food) => !isVeg(food));

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);
console.log(nonVegMenu);







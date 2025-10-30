// Impure function

let price = 100;

function calculateTaxedPrice(taxRate) {
    return price + price * taxRate;
}

console.log(calculateTaxedPrice(0.5));


// Pure function - Deterministic
function sum(a,b,c) {
    return a + b + c;
}

console.log(sum(1, 2, 3));
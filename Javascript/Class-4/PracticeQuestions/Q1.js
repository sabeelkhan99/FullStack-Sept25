/*

    Q1 Write a function convertTemperature(temp, unit) that:
        - Converts Celsius to Fahrenheit and vice versa.
        - Returns the converted temperature.
        - Example: convertTemperature(100, "C") → 212F.


        console.log(convertTemperature(100, "C")); // "212F"
        console.log(convertTemperature(32, "F"));  // "0C"
*/

// f = c * (9 / 5) + 32
// c = (f-32)*(5/9)

// or => ||
// and => &&
// not => ! 

function convertTemperature(temp, unit) {
    if (unit.toUpperCase() !== 'C' || unit.toUpperCase() !== 'F') {
        throw new Error('Invalid Unit');
    }
    if (unit == "C" || unit == "c") {
        return (temp * 9 / 5) + 32
    }
    if (unit == "F" || unit == 'f') {
        return (temp - 32) * 5 / 9;
    }
}

console.log(convertTemperature(100, "C")); // "212F"
console.log(convertTemperature(32, "F"));  // "0C"
console.log(convertTemperature(32, "K")); 
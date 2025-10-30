/*

    // Implement secretMessage(secret) that:
    //     Returns a function.
    //     When called, returns the stored secret.
    // Approach: Think about what this function will return. 
    // Will you get a value when you call this function or something that can be called later. 

    const secret = secretMessage("Hidden Code");

    function secretMessage(secret) {
        // Write your code here
    }

*/

function secretMessage(secret) {
    return function () {
        return secret;
    }
}

const f = secretMessage('Sometime i wear headphones in public so that i dont have to talk to anyone');
console.log(f());
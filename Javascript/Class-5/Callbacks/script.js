// function download(fileName, func) {
//     //creating file streams
//     // and dumping data into a temp file and returning it
//     func();
// }


// function main() {
//     const a = 100;


//     const cb = () => {
//         // notify the user
//         console.log('Inside the callback function');
//     }
//     // I want to download the file called: profile.jpg
//     download('profile.jpg', cb);
// }


function a() {
    console.log('Insid a')
}

function sum(callback) {
    callback();
}

sum(a)
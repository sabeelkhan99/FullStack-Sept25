const btn = document.querySelector('button');
const heading = document.querySelector('h1');
const ul = document.querySelector('ul');

// btn.addEventListener('click', function () {
//     heading.classList.toggle('heading-color');
// });

// btn.addEventListener('click', function () {
//     console.log('Another Event');
// })


/*
   
    On clicking the button append hello to the page.

*/

btn.addEventListener('click', function () {
    // created a li element
    const li = document.createElement('li');
    // adding text to the li
    li.innerText = 'Hello World';

    ul.append(li);
});




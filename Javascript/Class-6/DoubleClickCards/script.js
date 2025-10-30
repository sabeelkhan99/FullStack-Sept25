/*
    Write a script which fetches the data-color attribute of the 
    card and double clicking on them and attaches 
    the fetched color to that card and also 
    changes the data-color attribute to "used"

*/

const divs = document.getElementsByClassName('card');


for (let div of divs) {
    div.addEventListener('dblclick', function () {
        const dataColor = div.getAttribute('data-color');
        div.style.backgroundColor = dataColor;
        div.setAttribute('data-color', 'used');
    })
}
/*

You are given an HTML document containing an unordered list (<ul>) 
with list items (<li>) representing numbers 1 through 10. However, 
there is an element missing between the numbers 6 and 8. 
Your task is to identify the missing number in the sequence 
and insert it appropriately into the list to maintain the sequential order using JavaScript.

*/

const ul = document.querySelector('ul');

const item8 = document.querySelector('ul li:nth-of-type(7)');

const newLi = document.createElement('li');

newLi.innerText = '7';

ul.insertBefore(newLi, item8);


// ----------- correct the expression

/*
    Problem Statement : Given a mathematical expression 
    Fix the expression by using Javascript and taking help of the DOM
*/

const para = document.querySelector('p');

const str = para.innerText;

const expressionToEvaluated = str.split('=')[0];

const result = eval(expressionToEvaluated);

const correctExpression = `${expressionToEvaluated} = ${result}`;

para.innerText = correctExpression;
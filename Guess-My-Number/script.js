'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.number').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

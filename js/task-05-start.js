'use strict';

const input = document.getElementById('name-input');
// console.log(input);
// console.log(input.textContent);
const span = document.getElementById('name-output');
// console.log(span);
console.log(span.textContent);
// const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  if (!input.value) {
    span.textContent = 'Anonymous';
    console.log(span.textContent);
  } else {
    span.textContent = e.target.value;
  }
  // span.textContent = e.target.value;
}

// HTML
// <input placeholder="Enter some text" name="name" />
// <p id="values"></p>
// Copy to Clipboard

//     <p><a href="index.html">Go back</a></p>

//     <input type="text" id="name-input" placeholder="Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// JavaScript
// const input = document.querySelector('input');
// const log = document.getElementById('values');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

///////////////////////////////////////////////////////
// const input = document.querySelector('#name-input');
// const log = document.getElementById('name-output');
// console.log(log);

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   if (!input) {
//     log.textContent = 'Anonymous';
//     console.log('no input');
//   }
//   log.textContent = e.target.value;
// }

// Copy to Clipboard
// JavaScript
// const input = document.querySelector('input');

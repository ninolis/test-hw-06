'use strict';

///////////////////////////////////////////////
// JS V2 block-4 Autochecking  ASSIGNMENT 00/48  Status: Done

/*
** THEORY


** TASK
Task 4
The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Create a variable, counterValue, that will store the current counter value and initialize it with 0.
Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
Update the interface with the new value of the variable counterValue.

** Test


 */

// Javascript Editor:
// START
/*
// ** 10 Small JavaScript Apps
// ** Part 4 — Counter
<main>
  <div class="container">
    <h1>Counter</h1>
    <span id="value">0</span>
    <div class="button-container">
      <button class="btn decrease">decrease</button>
      <button class="btn reset">reset</button>
      <button class="btn increase">increase</button>
    </div>
  </div>
</main>

//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count-=1;
    }
    else if(styles.contains('increase')) {
        count+=1;
    }
    else{
        count = 0 
    }
    
    value.textContent = count;
  });
});


*/

// Javascript Editor:
// FINISH
/*

console.log(
*/

// RESULT
/*

*/
/*
const decreaseBtn = document.querySelector('button[data-action="decrement"]');
const increaseBtn = document.querySelector('button[data-action="increment"]');

console.log(decreaseBtn.dataset.action); //decrement
console.log(increaseBtn.dataset.action); //increment

btns.forEach(function (btn) {
  decreaseBtn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count -= 1;
    } else if (styles.contains('increase')) {
      count += 1;
    } else {
      count = 0;
    }

    value.textContent = count;
  });
});

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });
// Add event listener to table
const el = document.getElementById('outside');
decreaseBtn.addEventListener('click', (count -= 1));
*/

let count = 0;
const decreaseBtn = document.querySelector('button[data-action="decrement"]');
const increaseBtn = document.querySelector('button[data-action="increment"]');
const counterText = document.getElementById('value');

// function changeNumber() {
//   {
//     if (decreaseBtn.dataset.action === 'decrement') {
//       count += 1;
//     } else if (increaseBtn.dataset.action === 'increment') {
//       count -= 1;
//     }
//     // document.getElementById('value').innerHTML = count;
//     return (counterText.innerHTML = count);
//   }
// }
// decreaseBtn.addEventListener('click', changeNumber);
// increaseBtn.addEventListener('click', changeNumber);

decreaseBtn.addEventListener('click', function () {
  count -= 1;
  counterText.innerHTML = count;
});
increaseBtn.addEventListener('click', function () {
  count += 1;
  return (counterText.innerHTML = count);
});

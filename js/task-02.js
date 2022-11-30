const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients');

///////////////////////////////////////////////////////
// ** variant 1

// for (const ingredient of ingredients) {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.setAttribute('class', 'item');
//   ul.appendChild(li);
// }

///////////////////////////////////////////////////////
// ** variant 2

// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement('li');
//   li.textContent = ingredients[i];
//   li.setAttribute('class', 'item');
//   ul.appendChild(li);
// }

/////////////////////////////////////////
// ** variant 3

const allLi = [];
for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.setAttribute('class', 'item');
  allLi.push(li);
}

allLi.forEach((li) => {
  ul.appendChild(li);
});

/////////////////////////////////////////
// ** variant 4

// let htmlString = '';

// for (const ingredient of ingredients) {
//   const str = `<li class="item">${ingredient}</li>`;
//   htmlString += str;
// }

// ul.innerHTML = htmlString;

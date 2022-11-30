'use strict';

const allCategories = document.getElementsByTagName('h2');
console.log(`Number of categories: ${allCategories.length}`);

for (let i = 0; i < allCategories.length; i += 1) {
  console.log(`\nCategory: ${allCategories[i].textContent}`);
  const numberOfElements = document
    .getElementsByClassName('item')
    [i].getElementsByTagName('li').length;
  console.log(`Elements: ${numberOfElements}`);
}

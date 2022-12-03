'use strict';

const textInput = document.querySelector('#validation-input');
const textInputLength = document.querySelector('[data-length="6"]');
// console.log(textInputLength.dataset.length);
// console.log(typeof textInputLength.dataset.length);
// console.log(textInput.value);
// textInputLength.dataset.length;
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener('click', () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener('click', () => {
//   textInput.blur();
// });

// textInput.addEventListener('focus', () => {
//   textInput.value = 'This input has focus';
// });

textInput.addEventListener('blur', () => {
  console.log(textInput.value.length);
  // console.log(textInputLength.dataset.length);
  console.log(Number(textInputLength.dataset.length));

  if (textInput.value.length === Number(textInputLength.dataset.length)) {
    textInput.value = 'Correct';
    textInput.removeAttribute('class');
    textInput.classList.add('valid');
    // textInput.classList.replace('invalid', 'valid');
  } else {
    textInput.value = 'Not 6!!!';
    // textInput.classList.add('invalid');
    textInput.removeAttribute('class');
    // textInput.classList.remove('valid');
    textInput.classList.add('invalid');
    // textInput.classList.replace('valid', 'invalid');
  }
});

// if(document.form2.t.value.length!=4){
//             submitFlag=false;
//             alert("ivalid length - 4 characters needed!");
// }

// elem.classList.replace(oldClass, newClass);

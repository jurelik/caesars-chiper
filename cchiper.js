// Focus text input on load
// document.getElementById('input-text').focus();
// Used autofocus on input tag instead

// Chipher Code
function rot13(str) {

  let arr = str.toUpperCase().split("");
  let chiper = [];
  let highNum = 90;
  let lowNum = 65;
  let amountOfDisplacement = 13;

  arr.forEach(char => {
    let regex = /[^A-Z]+|_+/;

    if (regex.test(char)) {
      chiper = chiper.concat(char);
    }
    else if (char.charCodeAt() < lowNum + amountOfDisplacement) {
      chiper = chiper.concat(String.fromCharCode(highNum - (lowNum - (char.charCodeAt() - amountOfDisplacement + 1))));
    }
    else {
      chiper = chiper.concat(String.fromCharCode(char.charCodeAt() - amountOfDisplacement));
    }
  });

  str = chiper.join("");
  return str;
}

// DOM Code

let button = document.getElementById('submit-btn');
let form = document.getElementById('chipher');
let input = document.getElementById('input-text');
let result = document.getElementById('result');

form.addEventListener('submit', e => {
  e.preventDefault();

  result.innerHTML = rot13(input.value);
  button.blur();
});

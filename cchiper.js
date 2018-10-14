function rot13(str) { // LBH QVQ VG!

  let arr = str.split("");
  let chiper = [];
  let highNum = 90;
  let lowNum = 65;
  let amountOfDisplacement = 13;

  arr.forEach(char => {
    let regex = /\W+|_+/;

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

  console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
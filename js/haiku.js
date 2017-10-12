// constructor
export class Syllable(line1) {
  constructor() {
    this.line1 = line1;

  }
}

// counts the number of vowels in a string and returns an int
function vowelCount(input){
  return (input.match(/[aeiou]{1,2}/gi,'')).length;
};

// splits at spaces and returns an array of words
function inputArr(input){
  return input.toLowerCase().split(" ");
};

function eRemoval(input){
  let words = input.toLowerCase().split(" ");

  words = words.map(function(word){
  if (word.charAt(word.length - 1) === 'e') {
    return word.substr(0, word.length - 1)
    } else {
    return word;
    }
  });
  return words.join(" ");
}

function otherRemoval(input){
  return input.replace(/(\w*)es?(\W)/ig, "$1$2");
}

function otherRemoval(input){
  return input.replace(/(\w*)(?:e|es)(\W)/ig, "$1$2$3");
}

console.log(eRemoval("The red fox"))
console.log(otherRemoval("The red fox"))

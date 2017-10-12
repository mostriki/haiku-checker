// constructor
export class Syllable {
  constructor(line1, line2, line3) {
    this.array = [line1, line2, line3];
  }

  eRemoval() {
    let haiku = "";
    this.array.forEach((line) =>{
      let words = line.replace(/[^\w\s]|_/, "").split(" ");
      words = words.map((word) => {
        if (word.charAt(word.length - 1) === 'e' && word.length > 3) {
          return word.substr(0, word.length - 1);
        } else {
          return word;
        }
      });
      // console.log(words);
      haiku += words.join(" ");
    });
    return haiku;
  }

  isHaiku() {
    function vowelCount(x){
      let result = [];
      x.forEach((line) => {
        result.push((line.match(/[aeiouy]{1,2}/gi,'')).length);
      });
      return result;
    }

    let solution = this.eRemoval();
    solution = solution.split(' ');
    debugger;
      solution.forEach((element) =>{
        if (element[0] === 5 && element[1] === 7 && element[2] === 5) {
          return true;
        } else {
          return false;
        }
    });
  }
}



// Really cool RegEx for reference
// function otherRemoval(input){
//   return input.replace(/(\w*)es?(\W)/ig, "$1$2");
// }

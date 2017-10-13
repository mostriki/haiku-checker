// constructor
export class Poem {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  isHaiku(input) {
    if (this.syllableChecker(this.line1, 5) &&
        this.syllableChecker(this.line2, 7) &&
        this.syllableChecker(this.line3, 5)) {
      return true;
    }
  }

  vowelCounter(input) {
    return (input.match(/[aeiouy]{1,2}/gi,'')).length;
  }

  eDestroyer(input){
    let words = input.replace(/[^\w\s]|_/, "").split(" ");
    words = words.map((word) => {
      if (word.charAt(word.length - 1) === 'e' && word.length >= 3) {
        return word.substr(0, word.length - 1);
      } else {
        return word;
      }
    });
    return words.join(" ");

    // let result;
    //
    // //remove punctuation
    // input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    // //split string into words
    // input = input.split(' ');
    // //check last letter, kill it if it's an e
    // result = input.map(word => {
    //   console.log(word);
    //   if (word.substr(-1).toLowerCase() === 'e') {
    //     return word.substr(word, word.length - 1);
    //   } else {
    //     return word;
    //   }
    // });
    // //join and return
    // return result.join(' ');
  }

  destroyAndCount(input) {
    let result;

    result = this.eDestroyer(input);
    result = this.vowelCounter(result);

    return result;
  }

  syllableChecker(input,  desiredCount) {
    let result;

    result = this.destroyAndCount(input);

    if (result === desiredCount) {
      return true;
    } else {
      return false;
    }
  }

  // fiveSyl(input) {
  //   let result;
  //
  //   result = this.destroyAndCount(input);
  //   console.log(result);
  //
  //   if (result === 5) {
  //     return true;
  //   }
  // }
  //
  // sevenSyl(input) {
  //   let result;
  //
  //   result = this.destroyAndCount(input);
  //
  //   if (result === 7) {
  //     return true;
  //   }
  // }


}


// Really cool RegEx for reference
// function otherRemoval(input){
//   return input.replace(/(\w*)es?(\W)/ig, "$1$2");
// }

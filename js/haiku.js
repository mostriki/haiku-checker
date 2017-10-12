// constructor
export class Syllable {
  constructor(line1, line2, line3) {
    this.array = [line1, line2, line3];
  }

  eRemoval(){
    let haiku = "";
    this.array.forEach((line) =>{
      let words = line.replace(/[^\w\s]|_/, "").split(" ");
      words = words.map((word) => {
        if (word.charAt(word.length - 1) === 'e') {
          return word.substr(0, word.length - 1);
        } else {
          return word;
        }
      });
      haiku += words.join(" ");
    });
    return haiku;
  }

  vowelCount(){
    let result = [];
    this.array.forEach((line) => {
      result.push((line.match(/[aeiou]{1,2}/gi,'')).length);
    });
    return result;
  }
}

// eRemoval(input){
//   let words = input.split(" ");
//   words = words.map((word) => {
//     // checks to see if the last letter = e
//     if (word.charAt(word.length - 1) === 'e') {
//       //if ^ true then this goes from start to end and takes that chunk of the string
//       return word.substr(0, word.length - 1);
//     } else {
//       return word;
//     }
//   });
//   return words.join(" ");
// }

// Really cool RegEx for reference
// function otherRemoval(input){
//   return input.replace(/(\w*)es?(\W)/ig, "$1$2");
// }

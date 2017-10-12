// constructor
export class Syllable {
  constructor(line1, line2, line3) {
    this.array = [line1, line2, line3]
  }

  eRemoval(input){
    let words = input.toLowerCase().split(" ");
    words = words.map((word) => {
      // checks to see if the last letter = e
      if (word.charAt(word.length - 1) === 'e') {
        //if ^ true then this goes from start to end and takes that chunk of the string
        return word.substr(0, word.length - 1);
      } else {
        return word;
      }
    });
    return words.join(" ");
  }

  // counts the number of vowels in a string and returns an int
  vowelCount(){
    let result = [];
    this.array.forEach((line) => {
      result.push((line.match(/[aeiou]{1,2}/gi,'')).length);
    })
    return result;
  }
}





// Really cool RegEx for reference
// function otherRemoval(input){
//   return input.replace(/(\w*)es?(\W)/ig, "$1$2");
// }

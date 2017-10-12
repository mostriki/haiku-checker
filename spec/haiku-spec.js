import { Syllable } from './../js/haiku.js';

describe('Syllable', function() {
  it('will check for a total of 3 inputs', function() {
    let input = new Syllable("The red foxes", "Jump over the fence.", "Likes to eat apples!");
    console.log(input);
    expect(input).toEqual(input)
  });

  it('will scan an input and return the vowels count', function() {
    let vowel = new Syllable("The red foxes", "Jump over the fence.", "Likes to eat apples!");
    expect(vowel.vowelCount()).toEqual([4, 6, 6])
  });

  it('will remove slient e\'s at the end of any words in our string input', function() {
    let input = new Syllable("The red foxes", "Jump over the fence.", "Likes to eat apples!");
    expect(input.eRemoval()).toEqual('The red foxesJump over the fencLikes to eat apples')
  });

  it('will tell us if the input is a haiku', function() {
    let solution = new Syllable("The redish foxes", "Jump high over the brown fence.", "Likes to eat apples!");
    expect(solution.isHaiku()).toEqual(true)
  });
});

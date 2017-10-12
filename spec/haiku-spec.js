import { Syllable } from './../js/haiku.js';

describe('Syllable', function() {
  it('will scan an input and return the vowels count', function() {
    let vowel = new Syllable("The red foxes", "Jump over the fence.", "Likes to eat apples!");
    expect(vowel.vowelCount()).toEqual([4, 6, 6])
  });
});

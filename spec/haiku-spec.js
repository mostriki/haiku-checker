import { Syllable } from './../js/haiku.js';

describe('Calculator', function() {
  it('will replace 3 with pong', function() {
    var calc = new Calculator('Hot Pink')
    expect(calc.pingPong(3)).toEqual([1, 2, 'ping'])
  });
});

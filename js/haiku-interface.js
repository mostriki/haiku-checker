import { Syllable } from './../js/haiku.js';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    let line1 = $('#line1').val();
    let line2 = $('#line2').val();
    let line3 = $('#line3').val();
    var haiku = new Syllable(line1,line2,line3);
    var solution = haiku.isHaiku();
    if (solution === true) {
      $('#solution').text("You have written a beautiful haiku")
    }
    else {
      $('#solution').text("You have failed at haiku'ing, please try again!")
    }
  });
});

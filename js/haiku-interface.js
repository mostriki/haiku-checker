import { Syllable } from './../js/haiku.js';

$(document).ready(function() {
  $('').submit(function(event) {
    event.preventDefault();

    output.forEach(function(element) {
      $('').append("<li>" + element + "</li>");
    });
  });
});

// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// this code is what calls the api
// $.getJSON("api url goes inside here",
$.getJSON("http://swapi.co/api/people",
    function(response) {
      console.log(response);
    }
  );

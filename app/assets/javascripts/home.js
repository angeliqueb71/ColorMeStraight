// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


// declare the varible & reference by id
// declare the function -initParallax- the function will be called each time the user scrolls
// the Parallax part -window.pageYoffset/10)-300) + "px"
// controls the speed of the scroll /10, /5, /8
// if you give left or right position -300 or +100
// example - in your css if right: -200; than you give : f4.style.right = ((window.pageYOffset/10)-200)

document.addEventListener("DOMContentLoaded", function(event) {
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");
var f7 = document.getElementById("f7");
var f8 = document.getElementById("f8");
var f9 = document.getElementById("f9");
var f10 = document.getElementById("f10");


function initParallax(){



  f1.style.right = ((window.pageYOffset/9)-1000) + "px";
  f2.style.top = ((window.pageYOffset/5)+500) + "px";
  f3.style.left = ((window.pageYOffset/1)+450) + "px";

  // moves it diagonal
  f4.style.left = ((window.pageYOffset/6)-200) + "px";
  f4.style.bottom = ((window.pageYOffset/15)-300) + "px";

  f5.style.right = ((window.pageYOffset/12)-300) + "px";

  // moves it diagonal
  // f6.style.top = ((window.pageYOffset/2)+1)+ "px";
  f6.style.top = ((window.pageYOffset/4)-350) + "px";

  f7.style.top = ((window.pageYOffset/3)-50) + "px";



}

window.addEventListener("scroll", initParallax);

});

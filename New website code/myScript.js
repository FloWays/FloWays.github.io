// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navbar");
var card = document.getElementById("card");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");


// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
	card.classList.add("nonavbar");
	card2.classList.add("nonavbar");
	card3.classList.add("nonavbar");
	card4.classList.add("nonavbar");
  } else {
    header.classList.remove("sticky");
	card.classList.remove("nonavbar");
	card2.classList.remove("nonavbar");
	card3.classList.remove("nonavbar");
	card4.classList.remove("nonavbar");
  }
}
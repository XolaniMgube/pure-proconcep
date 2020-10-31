// Animation for the header when you scroll lower 60
window.onscroll = function() {scroll()};
	function nav() {
		let navHeight = document.querySelector("nav");
		navHeight = navHeight.classList.add(".navbar")
	}

	function scroll() {
		if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
			document.getElementById("header").style.height = "70px";
			document.getElementById("logoImg").style.width = "75px";
			document.getElementById("logoImg").style.padding = "0px 0px 50px 70px";
			document.getElementById("logoText").style.padding = "0px";
			document.getElementById("logoText").style.fontSize = "25px";
			document.getElementById("navbar").style.padding = "21px 40px 0px 0px"
		}   else{
			document.getElementById("header").style.height = "100px";
			document.getElementById("logoImg").style.width = "160px";
			document.getElementById("logoImg").style.padding = "10px 0px 0px 0px";
			document.getElementById("logoText").style.padding = "35px 0 0 20px";
			document.getElementById("logoText").style.fontSize = "22pt"
			document.getElementById("navbar").style.padding = "51px 40px 0px 0px"
		}

		// var x = window.matchMedia("(max-width: 700px)")
		// if (x.matches) {
		// 	document.getElementById("header").style.color = "red";
		// }
	}










// Responsiveness of the navigation bar
let toggleNavStatus = false;
let toggleNav = function(){
	let getNav = document.querySelector(".nav");

	if (toggleNavStatus === false){
		getNav.style.overflow = "visible";

		toggleNavStatus = true; 
		} 

	else if (toggleNavStatus === true){
		getNav.style.overflow = "hidden";

		toggleNavStatus = false;
	}
}















// Styling the nav links when they are active
function  addClass() {
	let element = document.getElementsByClassName("navigation")
	for (let i = 0; i < element.length; i++) {
		element[i].addEventListener("click", function() {
			let current = document.getElementsByClassName("active")
			if (current.length == 1) {
				current[0].className = current[0].className.replace(" active", "")
			}
			this.className += " active"
		})
	}
}

addClass()



















// Smooth scrooll effect on cross browser in JQuery
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
  
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });
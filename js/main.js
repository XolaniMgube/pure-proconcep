/** @format */






function scroll() {
  let navigation = document.querySelector("nav");
  let logoImg = document.querySelector(".logo img");
  let logo = document.querySelector(".logo");
  let logoText = document.querySelector(".logo h2");
  let navLinks = document.querySelector(".nav-links");
  if (
    document.body.scrollTop > 60 ||
    (document.documentElement.scrollTop > 60 && window.innerWidth > 600)
  ) {
    navigation.style.height = "70px";
    logoImg.style.width = "70px";
    logo.style.height = "70px";
    logo.style.gridTemplateColumns = "75px 1fr";
    logoText.style.fontSize = "25px";
    navLinks.style.padding = "0px 0 30px 0";
  } else {
    navigation.style.height = "100px";
    logoImg.style.width = "160px";
    logo.style.height = "auto";
    logo.style.gridTemplateColumns = "160px 1fr";
    logoText.style.fontSize = "auto";
    navLinks.style.padding = "0px 0 0px 0";
  }

  if (window.innerWidth <= 600) {
    navigation.style.height = "70px";
    logo.style.height = "70px";
    logoImg.style.width = "60px";
    logo.style.gridTemplateColumns = "65px 1fr";
  }
}




const navFunctionality = () => {
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const burger = document.querySelector(".burger");

  let animateLinks = () => {
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
  }

  let burgerToggle = () => {
    burger.classList.toggle("toggle");
  } 

  let navToggle = () => {
    nav.classList.toggle("nav-active");
  }

  // Making navLinks go away after clicking on one link && burger menu transformation
  if (window.innerWidth <= 900) {
    nav.addEventListener('click', () => {
      navToggle();
      animateLinks();
      burgerToggle();
    })
  }

  // Making navLinks appear and disappear when clicking the burger menu && burger menu transformation
  burger.addEventListener('click', () => {
    navToggle();
    animateLinks();
    burgerToggle();
  })
}




// Styling the nav links when they are active
function activeNavLinks() {
  let element = document.getElementsByClassName("navigation");
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      if (current.length == 1) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}



let invockingFunctions = () => {
  window.onscroll = () => scroll();
  navFunctionality();
  activeNavLinks();
};

invockingFunctions();




// Smooth scrooll effect on cross browser in JQuery
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

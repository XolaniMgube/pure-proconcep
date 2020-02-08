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
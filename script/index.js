var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// HAMBURGER ICON SCRIPT

const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuItems = document.querySelector('.middle-container');
// const headerBtn = document.querySelector('.header-btn-container');
const main = document.querySelector('main');

hamburgerIcon.addEventListener("click", () => {
    menuItems.classList.toggle("show-menu");
    main.classList.toggle('main-down');
	// headerBtn.classList.toggle('show-button');
});

// COLLAPSIBLE PRODUCT

const btnExpand = document.querySelector(".see-btn");
const productSection = document.querySelector(".product-section")

btnExpand.addEventListener('click', () =>{
	productSection.classList.toggle('down');
})
// SELECTORS

const hamMenu = document.getElementById("hamMenu");
const hamMenuImg = document.querySelector("#hamMenu img");
const navItems = document.getElementById("navItems");

const testimonialCards = document.querySelectorAll(
	"#testimonials .testimonial-container"
);
const carouselSwitches = document.querySelectorAll("#carouselSwitches .switch");

// EVENTS

hamMenu.addEventListener("click", toggleNavMenu);
carouselSwitches.forEach((carouselSwitch, key) => {
	carouselSwitch.addEventListener("click", () => {
		switchTestimonial(key);
		highlightCarouselSwitch(key);
	});
});

// FUNCTIONS

function highlightCarouselSwitch(index) {
	carouselSwitches.forEach((carouselSwitch, key) => {
		if (key === index) {
			carouselSwitch.classList.add("bg-brightRed");
		} else {
			carouselSwitch.classList.remove("bg-brightRed");
		}
	});
}

function switchTestimonial(index) {
	testimonialCards.forEach((card, key) => {
		if (key === index) {
			card.classList.remove("hidden");
			card.classList.add("flex");
		} else {
			card.classList.add("hidden");
		}
	});
}

function toggleNavMenu() {
	const closeIcon = "img/icon-close.svg";
	const hamIcon = "img/icon-hamburger.svg";
	const srcValue = hamMenuImg.getAttribute("src");
	srcValue === hamIcon
		? hamMenuImg.setAttribute("src", closeIcon)
		: hamMenuImg.setAttribute("src", hamIcon);

	navItems.classList.toggle("hidden");
	navItems.classList.toggle("flex");
}

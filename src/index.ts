/**
 * Toogle Menu
 */
const navbar = document.getElementById('navbar') as HTMLDivElement;

const toggleMenu = document.getElementById('toggle-menu') as HTMLButtonElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;

toggleMenu?.addEventListener('click', () => {
	navbarMenu?.classList.toggle('show');

	const isAlreadyActive = navbar?.classList.contains('active');

	if (isAlreadyActive && window.scrollY === 0) {
		navbar?.classList.remove('active');
	} else if (window.scrollY === 0) {
		navbar?.classList.add('active');
	}

	toggleMenu?.querySelectorAll('i').forEach((icon) => {
		icon?.classList.toggle('hidden');
	});
});

window.onscroll = function () {
	if (window.scrollY > 98) {
		navbar?.classList.add('active');
	} else {
		navbar?.classList.remove('active');
	}
};

/**
 * Scroll Reveal Animatiion
 */
import ScrollReveal from 'scrollreveal';

// Home Image
ScrollReveal().reveal('.home-img', {
	origin: 'top',
	distance: '65%',
	reset: true,
	mobile: true,
	easing: 'ease-in-out',
	delay: 200,
	duration: 4500,
	opacity: 0,
});

// Home Text
ScrollReveal().reveal('.home-text', {
	origin: 'right',
	distance: '35%',
	reset: true,
	mobile: true,
	easing: 'ease-in-out',
	delay: 250,
	duration: 2500,
	opacity: 0,
});

// Home Subtitle
ScrollReveal().reveal('.home-subtitle', {
	origin: 'bottom',
	distance: '35%',
	reset: true,
	mobile: true,
	easing: 'ease-in-out',
	delay: 2750,
	duration: 2100,
	opacity: 0,
});

// Brands
ScrollReveal().reveal('#brands', {
	reset: true,
	mobile: true,
	easing: 'ease-in-out',
	delay: 250,
	duration: 2700,
	opacity: 0,
});

// Feature Items
const featureItemsNumber =
	(document.querySelectorAll('.feature-item') as NodeListOf<HTMLLIElement>)
		?.length ?? 0;

for (let index = 0; index < featureItemsNumber; index++) {
	ScrollReveal().reveal(`.feature-item:nth-child(${index + 1})`, {
		origin: 'left',
		distance: '35%',
		reset: true,
		mobile: true,
		easing: 'ease-in-out',
		delay: index * 250,
		duration: 2500,
		opacity: 0,
	});
}

// Feature Image
ScrollReveal().reveal('.features-img', {
	origin: 'right',
	distance: '45%',
	reset: true,
	mobile: true,
	easing: 'ease-in-out',
	delay: 750,
	duration: 3000,
	opacity: 0,
});

// Case Image
ScrollReveal().reveal('.case-img', {
	reset: true,
	mobile: true,
	easing: 'ease-in-out',
	delay: 650,
	duration: 3000,
	opacity: 0,
});

// Case Text
ScrollReveal().reveal('.case-text', {
	reset: true,
	mobile: true,
	easing: 'ease-in-out',
	delay: 950,
	duration: 2000,
	opacity: 0,
});

// Promotion Text
ScrollReveal().reveal('.promotion-text', {
	origin: 'left',
	distance: '75%',
	reset: true,
	mobile: true,
	easing: 'ease-in-out',
	delay: 350,
	duration: 2500,
	opacity: 0,
});

// Promotion Image
ScrollReveal().reveal('.promotion-img', {
	origin: 'right',
	distance: '75%',
	reset: true,
	mobile: true,
	easing: 'ease-in-out',
	delay: 350,
	duration: 2500,
	opacity: 0,
});

// Product List
const productItemsNumber: number =
	(document.querySelectorAll('.product-item') as NodeListOf<HTMLDivElement>)
		?.length ?? 0;

for (let index = 0; index < productItemsNumber; index++) {
	ScrollReveal().reveal(`.product-item:nth-child(${index + 1})`, {
		origin: 'bottom',
		distance: '5%',
		reset: true,
		mobile: true,
		easing: 'ease-in-out',
		delay: index * 250,
		duration: 1700,
		opacity: 0,
	});
}

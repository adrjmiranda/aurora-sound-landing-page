/**
 * Toogle Menu
 */
const navbar = document.getElementById('navbar') as HTMLDivElement;

const toggleMenu = document.getElementById('toggle-menu') as HTMLButtonElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;

toggleMenu?.addEventListener('click', () => {
	navbar?.classList.toggle('active');
	navbarMenu?.classList.toggle('show');

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

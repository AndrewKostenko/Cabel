// header subitem
const headerSubitems = document.querySelectorAll('.header_subitem');
let windowWidth = 0;
window.addEventListener('resize', function () {
	windowWidth = window.innerWidth;
})
window.addEventListener('DOMContentLoaded', function () {
	windowWidth = window.innerWidth;

})

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || (windowWidth <= 900)) {
	for (elem of headerSubitems) {
		elem.parentElement.addEventListener('click', function () {
			if (!event.target.closest(".header_subitem")) {
				let activeElem = this.classList.contains('active');
				headerMenu.classList.add('change');

				for (elem of headerSubitems) {
					elem.parentElement.classList.remove('active');
				}

				event.preventDefault();
				if (activeElem) {
					this.classList.remove('active');
					headerMenu.classList.remove('change')
				} else {
					this.classList.toggle('active');
					headerMenu.classList.add('change')
				}
			}
		})
	}
}
document.addEventListener('click', function () {
	if (!event.target.closest('.header')) {
		for (elem of headerSubitems) {
			elem.parentElement.classList.remove('active');
			headerMenu.classList.remove('change');
		}
	}
})

const subItemReturn = document.querySelectorAll('.header_subitem-return');
for (elem of subItemReturn) {
	elem.addEventListener("click", function () {
		for (elem of headerSubitems) {
			elem.parentElement.classList.remove('active');
			headerMenu.classList.remove('change');
		}
	})
}


//header burger menu
const burger = document.querySelector('.menu_burger');
const headerMenu = document.querySelector(".header_menu");

burger.addEventListener('click', function () {
	this.classList.toggle('active');
	headerMenu.classList.toggle('active');
});

//intro slider
new Swiper('.intro', {
	navigation: {
		nextEl: ".intro_button-next",
		prevEl: ".intro_button-prev",
	},
})

// products	slider
new Swiper('.products_items', {
	slidesPerView: "auto",
	spaceBetween: 30,
	freeMode: true,
})

// news slider
const newsItems = document.querySelector('.news_items');


new Swiper('.news_slider', {
	slidesPerView: "auto",
	freeMode: true,


	allowTouchMove: true,
	noSwiping: false,
	breakpoints: {
		1000: {
			allowTouchMove: false,
			noSwiping: true,
		}
	}

})

// images slider
new Swiper('.images_inner', {
	spaceBetween: 20,
	slidesPerView: "auto",
	freeMode: true,
	navigation: {
		nextEl: ".images_next",
		prevEl: ".images_prev",
	},
	pagination: {
		el: ".images_pagin",
	},

	breakpoints: {
		500: {
			spaceBetween: 30,
			slidesPerView: 1,
			freeMode: false,
		}
	}
})

// language slider
new Swiper('.length_items', {
	slidesPerView: "auto",
	spaceBetween: 30,
	freeMode: true,
})


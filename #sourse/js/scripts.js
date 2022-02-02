// IBG =============================================================
if (document.querySelectorAll('.ibg')) {
	const imageBackground = document.querySelectorAll('.ibg');
	for (elem of imageBackground) {
		let img = elem.querySelector('img');
		elem.style.background = `url(${img.getAttribute('src')}) center / cover no-repeat`;
		img.remove();
	}
}
// /IBG =============================================================

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentSlide = 0;

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.classList.remove('active');
		if (i === index) {
			slide.classList.add('active');
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle('active', i === index);
	});
}

prevButton.addEventListener('click', () => {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
});

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlide = index;
		showSlide(currentSlide);
	});
});

showSlide(currentSlide);

// Footer btn UP
document.querySelector('.footer__top-btn').onclick = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};

// Video Play Button
let video = document.getElementById('video__content');
let playButton = document.getElementById('playButton');

// Приховати атрибут controls
video.removeAttribute('controls');

playButton.addEventListener('click', function () {
	if (video.paused) {
		video.play();
		video.setAttribute('controls', 'true'); // Додати атрибут controls
		playButton.style.display = 'none';
	} else {
		video.pause();
		video.removeAttribute('controls'); // Видалити атрибут controls
		playButton.style.display = 'block';
	}
});

const hamburger = document.querySelector('.header__hamburger');
const closeBtn = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');
const prevBtn = document.querySelector('.hero__button--prev');
const nextBtn = document.querySelector('.hero__button--next');
const slides = document.querySelectorAll('.hero__slide');
const textSlides = document.querySelectorAll('.hero__text');

let currentSlide = 0;

const toggleNav = () => {
    nav.classList.toggle('nav--open');
    document.body.classList.toggle('no-scroll');
};

const changeSlide = (direction) => {
    slides[currentSlide].classList.remove('hero__slide--active');
    textSlides[currentSlide].classList.remove('hero__text--active');

    currentSlide = direction === 'next'
        ? (currentSlide + 1) % slides.length
        : (currentSlide - 1 + slides.length) % slides.length;

    slides[currentSlide].classList.add('hero__slide--active');
    textSlides[currentSlide].classList.add('hero__text--active');
};

hamburger.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);
prevBtn.addEventListener('click', () => changeSlide('prev'));
nextBtn.addEventListener('click', () => changeSlide('next'));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') changeSlide('prev');
    if (e.key === 'ArrowRight') changeSlide('next');
});
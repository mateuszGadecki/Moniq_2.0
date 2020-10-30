// Mobile navigation

const target = document.querySelector('.full-width-navi');
const burgerBtn = document.querySelector('.burger-btn');
const navi = document.querySelector('.navigation');
const mobileNavi = document.querySelector('.mobile-navi');
// A function that hide navigation
let slideUp = (nav, target, duration, btn) => {
    target.style.display = 'none';
    target.classList.remove("animate__fadeInUp");
    target.classList.remove("animate__faster");
    nav.style.height = '70px';
    nav.style.transitionProperty = 'height';
    nav.style.transitionDuration = duration + 'ms';
    btn.setAttribute('name', 'menu');
};
// A function that shows navigation
let slideDown = (nav, target, duration, btn) => {
    let display = window.getComputedStyle(target).display;
    if (display === 'none') { display = 'block'; }
    target.style.display = display;
    target.classList.add("animate__fadeInUp");
    target.classList.add("animate__faster");
    nav.style.height = '150px';
    nav.style.transitionProperty = 'height';
    nav.style.transitionDuration = duration + 'ms';
    btn.setAttribute('name', 'close');
};
// Toggle between show and hide navigation
let slideToggle = (nav, target, duration, btn) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(nav, target, duration, btn);
    } else {
        return slideUp(nav, target, duration, btn);
    }
};

mobileNavi.addEventListener('click', () => {
    slideToggle(navi, target, 300, burgerBtn);
});
// Copy to clipboard on button click
const copyButton = document.querySelector('.copy-btn');
const emailDOM = document.querySelector('.email');

copyButton.addEventListener('click', () => {
    copyText(emailDOM);
});

const copyText = (e) => {
    let elementText = e.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();

    document.execCommand('copy');

    inputElement.parentNode.removeChild(inputElement);
};

// Mobile navigation

const target = document.querySelector('.full-width-navi');
const burgerBtn = document.querySelector('.burger-btn');
const navi = document.querySelector('.navigation');
const mobileNavi = document.querySelector('.mobile-navi');
const anim_1 = document.querySelector('.nav_1_animation');
const anim_2 = document.querySelector('.nav_2_animation');
const anim_3 = document.querySelector('.nav_3_animation');
const anim_4 = document.querySelector('.nav_4_animation');
// A function that hide navigation
let slideUp = (nav, target, duration, btn, anim_1, anim_2, anim_3, anim_4) => {
    target.style.display = 'none';
    // Animation
    anim_1.classList.remove("animate__fadeInUp");
    anim_2.classList.remove("animate__fadeInUp");
    anim_3.classList.remove("animate__fadeInUp");
    anim_4.classList.remove("animate__fadeInUp");
    nav.style.height = '70px';
    nav.style.transitionProperty = 'height';
    nav.style.transitionDuration = duration + 'ms';
    btn.setAttribute('name', 'menu');
};
// A function that shows navigation
let slideDown = (nav, target, duration, btn, anim_1, anim_2, anim_3, anim_4) => {
    let display = window.getComputedStyle(target).display;
    if (display === 'none') { display = 'block'; }
    target.style.display = display;
    // Animation
    anim_1.classList.add("animate__fadeInUp");
    anim_2.classList.add("animate__fadeInUp");
    anim_3.classList.add("animate__fadeInUp");
    anim_4.classList.add("animate__fadeInUp");
    nav.style.height = '150px';
    nav.style.transitionProperty = 'height';
    nav.style.transitionDuration = duration + 'ms';
    btn.setAttribute('name', 'close');
};
// Toggle between show and hide navigation
let slideToggle = (nav, target, duration, btn, anim_1, anim_2, anim_3, anim_4) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(nav, target, duration, btn, anim_1, anim_2, anim_3, anim_4);
    } else {
        return slideUp(nav, target, duration, btn, anim_1, anim_2, anim_3, anim_4);
    }
};

mobileNavi.addEventListener('click', () => {
    slideToggle(navi, target, 300, burgerBtn, anim_1, anim_2, anim_3, anim_4);
});
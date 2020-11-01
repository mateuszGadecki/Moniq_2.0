const DOMstrings = {
    navbar: document.querySelector('.hp_nav'),
    sectionNews: document.querySelector('.section_news'),
    frontPage: document.querySelector('.section_frontPage'),
    monikaDes :document.querySelector('.monikaDes'),
    paulaDes :document.querySelector('.paulaDes'),
    aboutUsTopLeft :document.querySelector('.aboutUs_top_left'),
    aboutUsTopRight :document.querySelector('.aboutUs_top_right'),
    monikaBtn :document.querySelector('.monika-btn'),
    paulaBtn :document.querySelector('.paula-btn'),
    target : document.querySelector('.full-width-navi'),
    burgerBtn : document.querySelector('.burger-btn'),
    navi : document.querySelector('.js-nav'),
    mobileNavi : document.querySelector('.mobile-navi'),
    navID: document.querySelector('#nav')
}

// Sticky Navigation
window.onscroll = function() {stickyNavigation()};
const frontPageHeight = DOMstrings.frontPage.offsetHeight - 10;

function stickyNavigation() {
    if (window.pageYOffset >= frontPageHeight) {
    DOMstrings.navbar.classList.add("sticky-nav");
    if (DOMstrings.navID.classList.contains('sticky-nav')) {
    DOMstrings.mobileNavi.style.top = '15px';
    }
} else {
    DOMstrings.navbar.classList.remove("sticky-nav");
    DOMstrings.mobileNavi.style.top = '22px';
}
};

// Mobile navigation
// A function that hide navigation
let slideUp = (nav, target, duration, btn) => {
    target.style.display = 'none';
    target.classList.remove("animate__fadeInUp");
    target.classList.remove("animate__faster");
    if (DOMstrings.navID.classList.contains('sticky-nav')) {
        nav.style.height = '55px';
        nav.style.transitionProperty = 'height';
        nav.style.transitionDuration = duration + 'ms';
    }
    btn.setAttribute('name', 'menu');
};
// A function that shows navigation
let slideDown = (nav, target, duration, btn) => {
    let display = window.getComputedStyle(target).display;
    if (display === 'none') { display = 'block'; }
    target.style.display = display;
    target.classList.add("animate__fadeInUp");
    target.classList.add("animate__faster");
    if (DOMstrings.navID.classList.contains('sticky-nav')) {
        nav.style.height = '150px';
        nav.style.transitionProperty = 'height';
        nav.style.transitionDuration = duration + 'ms';
    }
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

DOMstrings.mobileNavi.addEventListener('click', () => {
    slideToggle(DOMstrings.navi, DOMstrings.target, 300, DOMstrings.burgerBtn);
});

// AboutUs section

const gradient = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
const shadow = 'rgba(0, 0, 0, 0.767) 0px 22px 70px 4px';
// Create Toogle hide and show description, gradient etc..
const toggleLeft = () => {
if (DOMstrings.aboutUsTopLeft.style.backgroundImage === `${gradient}`) {
    // Return to the initial state
    DOMstrings.monikaDes.style.backgroundImage = ``;
    DOMstrings.aboutUsTopLeft.style.backgroundImage = ``;
    DOMstrings.monikaBtn.style.boxShadow = ``;
    const titleMonika = '<p></p>'
    const desMonika = '<p></p>'
    DOMstrings.aboutUsTopLeft.innerHTML = titleMonika;
    DOMstrings.monikaDes.innerHTML = desMonika;
    // Animation
    DOMstrings.monikaDes.classList.remove('animate__fadeIn');
    DOMstrings.aboutUsTopLeft.classList.remove('animate__fadeIn');
} else {
    // Adding gradient on picture and boxShadow on button
    DOMstrings.monikaDes.style.backgroundImage = `${gradient}`;
    DOMstrings.aboutUsTopLeft.style.backgroundImage = `${gradient}`;
    DOMstrings.monikaBtn.style.boxShadow = `${shadow}`;
    // Adding Description and Title
    const titleMonika = '<p>Monika Lipińska</p>'
    const desMonika = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequatur minima totam neque impedit saepe molestiae corporis blanditiis. Nesciunt neque laboriosam iste sapiente illo ex eveniet animi molestias dolores voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequatur minima totam neque impedit saepe molestiae corporis blanditiis. Nesciunt neque laboriosam iste sapiente illo ex eveniet animi molestias dolores voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequatur minima totam neque impedit saepe molestiae corporis blanditiis. Nesciunt neque laboriosam iste sapiente illo ex eveniet animi molestias dolores voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequatur minima totam neque impedit saepe molestiae corporis blanditiis. Nesciunt neque laboriosam iste sapiente illo ex eveniet animi molestias dolores voluptatum?</p>'
    DOMstrings.aboutUsTopLeft.innerHTML = titleMonika;
    DOMstrings.monikaDes.innerHTML = desMonika;
    // Animation
    DOMstrings.monikaDes.classList.add('animate__fadeIn');
    DOMstrings.aboutUsTopLeft.classList.add('animate__fadeIn');
    // Remove description, title, boxShadow, gradient on picture from the adjacent section
    DOMstrings.paulaDes.style.backgroundImage = ``;
    DOMstrings.aboutUsTopRight.style.backgroundImage = ``;
    DOMstrings.paulaBtn.style.boxShadow = ``;
    const titlePaula = '<p></p>'
    const desPaula = '<p></p>'
    DOMstrings.aboutUsTopRight.innerHTML = titlePaula;
    DOMstrings.paulaDes.innerHTML = desPaula;
    // Animation
    DOMstrings.paulaDes.classList.remove('animate__fadeIn');
    DOMstrings.aboutUsTopRight.classList.remove('animate__fadeIn');
}
};
const toggleRight = () => {
if (DOMstrings.aboutUsTopRight.style.backgroundImage === `${gradient}`) {
    // Return to the initial state
    DOMstrings.paulaDes.style.backgroundImage = ``;
    DOMstrings.aboutUsTopRight.style.backgroundImage = ``;
    DOMstrings.paulaBtn.style.boxShadow = ``;
    const titlePaula = '<p></p>'
    const desPaula = '<p></p>'
    DOMstrings.aboutUsTopRight.innerHTML = titlePaula;
    DOMstrings.paulaDes.innerHTML = desPaula;
    // Animation
    DOMstrings.paulaDes.classList.remove('animate__fadeIn');
    DOMstrings.aboutUsTopRight.classList.remove('animate__fadeIn');
} else {
    // Adding gradient on picture and boxShadow on button
    DOMstrings.paulaDes.style.backgroundImage = `${gradient}`;
    DOMstrings.aboutUsTopRight.style.backgroundImage = `${gradient}`;
    DOMstrings.paulaBtn.style.boxShadow = `${shadow}`;
    // Adding Description and Title
    const titlePaula = '<p>Paula Lipińska</p>'
    const desPaula = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequatur minima totam neque impedit saepe molestiae corporis blanditiis. Nesciunt neque laboriosam iste sapiente illo ex eveniet animi molestias dolores voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequatur minima totam neque impedit saepe molestiae corporis blanditiis. Nesciunt neque laboriosam iste sapiente illo ex eveniet animi molestias dolores voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequatur minima totam neque impedit saepe molestiae corporis blanditiis. Nesciunt neque laboriosam iste sapiente illo ex eveniet animi molestias dolores voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequatur minima totam neque impedit saepe molestiae corporis blanditiis. Nesciunt neque laboriosam iste sapiente illo ex eveniet animi molestias dolores voluptatum?</p>'
    DOMstrings.aboutUsTopRight.innerHTML = titlePaula;
    DOMstrings.paulaDes.innerHTML = desPaula;
    // Animation
    DOMstrings.paulaDes.classList.add('animate__fadeIn');
    DOMstrings.aboutUsTopRight.classList.add('animate__fadeIn');
    // Remove description, title, boxShadow, gradient on picture from the adjacent section
    DOMstrings.monikaDes.style.backgroundImage = ``;
    DOMstrings.aboutUsTopLeft.style.backgroundImage = ``;
    DOMstrings.monikaBtn.style.boxShadow = ``;
    const titleMonika = '<p></p>'
    const desMonika = '<p></p>'
    DOMstrings.aboutUsTopLeft.innerHTML = titleMonika;
    DOMstrings.monikaDes.innerHTML = desMonika;
    // Animation
    DOMstrings.monikaDes.classList.remove('animate__fadeIn');
    DOMstrings.aboutUsTopLeft.classList.remove('animate__fadeIn');
}
};
DOMstrings.monikaBtn.addEventListener('click', toggleLeft);
DOMstrings.paulaBtn.addEventListener('click', toggleRight);


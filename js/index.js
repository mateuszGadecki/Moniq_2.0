// Sticky Navigation
window.onscroll = function() {stickyNavigation()};

const navbar = document.querySelector('.hp_nav');
const sectionNews = document.querySelector('.section_news');
const sectionNewsTop = sectionNews.offsetTop;


function stickyNavigation() {
    if (window.pageYOffset >= sectionNewsTop) {
      navbar.classList.add("sticky-nav")
    } else {
      navbar.classList.remove("sticky-nav");
    }
}


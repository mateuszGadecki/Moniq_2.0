const DOMstrings = {
  navbar: document.querySelector('.hp_nav'),
  sectionNews: document.querySelector('.section_news'),
  monikaDes :document.querySelector('.monikaDes'),
  paulaDes :document.querySelector('.paulaDes'),
  aboutUsTopLeft :document.querySelector('.aboutUs_top_left'),
  aboutUsTopRight :document.querySelector('.aboutUs_top_right'),
  monikaBtn :document.querySelector('.monika-btn'),
  paulaBtn :document.querySelector('.paula-btn'),
}

// Sticky Navigation
window.onscroll = function() {stickyNavigation()};
const sectionNewsTop = DOMstrings.sectionNews.offsetTop;

function stickyNavigation() {
  if (window.pageYOffset >= sectionNewsTop) {
    DOMstrings.navbar.classList.add("sticky-nav");
  } else {
    DOMstrings.navbar.classList.remove("sticky-nav");
  }
};

// AboutUs section

const gradient = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
const shadow = 'rgba(0, 0, 0, 0.767) 0px 22px 70px 4px';

// Create Toogle hide and show description, gradient etc..
const displayDesLeft = () => {
  if (DOMstrings.aboutUsTopLeft.style.backgroundImage === `${gradient}`) {
    // Return to the initial state
    DOMstrings.monikaDes.style.backgroundImage = ``;
    DOMstrings.aboutUsTopLeft.style.backgroundImage = ``;
    DOMstrings.monikaBtn.style.boxShadow = ``;
    const titleMonika = '<p></p>'
    const desMonika = '<p></p>'
    DOMstrings.aboutUsTopLeft.innerHTML = titleMonika;
    DOMstrings.monikaDes.innerHTML = desMonika;

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
    // Remove description, title, boxShadow, gradient on picture from the adjacent section
    DOMstrings.paulaDes.style.backgroundImage = ``;
    DOMstrings.aboutUsTopRight.style.backgroundImage = ``;
    DOMstrings.paulaBtn.style.boxShadow = ``;
    const titlePaula = '<p></p>'
    const desPaula = '<p></p>'
    DOMstrings.aboutUsTopRight.innerHTML = titlePaula;
    DOMstrings.paulaDes.innerHTML = desPaula;
  }
};

const displayDesRight = () => {
  if (DOMstrings.aboutUsTopRight.style.backgroundImage === `${gradient}`) {
    // Return to the initial state
    DOMstrings.paulaDes.style.backgroundImage = ``;
    DOMstrings.aboutUsTopRight.style.backgroundImage = ``;
    DOMstrings.paulaBtn.style.boxShadow = ``;
    const titlePaula = '<p></p>'
    const desPaula = '<p></p>'
    DOMstrings.aboutUsTopRight.innerHTML = titlePaula;
    DOMstrings.paulaDes.innerHTML = desPaula;
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

    // Remove description, title, boxShadow, gradient on picture from the adjacent section
    DOMstrings.monikaDes.style.backgroundImage = ``;
    DOMstrings.aboutUsTopLeft.style.backgroundImage = ``;
    DOMstrings.monikaBtn.style.boxShadow = ``;
    const titleMonika = '<p></p>'
    const desMonika = '<p></p>'
    DOMstrings.aboutUsTopLeft.innerHTML = titleMonika;
    DOMstrings.monikaDes.innerHTML = desMonika;
  }

};

DOMstrings.monikaBtn.addEventListener('click', displayDesLeft);
DOMstrings.paulaBtn.addEventListener('click', displayDesRight);

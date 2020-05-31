/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

 //Define Global Variables

const sections = Array.from(document.querySelectorAll('section[data-nav]'));
const ul = document.querySelectorAll('ul');
const nav_list = document.getElementsByClassName("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

for (let i=0; i<sections.length;i++) {
  const li = document.createElement('li');
  const anch = document.createElement('a');
  const sectionId = sections[i].id;
  anch.innerHTML = sections[i].id;
  anch.setAttribute("href", `#${sectionId}`);
  nav_list[0].appendChild(li);
  li.appendChild(anch);
};

//burger and menu in mobile format
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar__list');
  //const navLinks = document.querySelectorAll('.navbar__list li');

  burger.addEventListener('click',()=> {
    nav.classList.toggle('burger_active');
    /*navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = 'navLinkFade 0,5s ease forwards $‘{index/7 +1,5}s';
      }
    })*/
  });
};
navSlide();

// Add class 'active' to section when near top of viewport
function isInViewport () {  //create the function isInViewport
  for (let i=0; i<sections.length;i++) { //for loop to get the sections
    const bounding = sections[i].getBoundingClientRect(); // const get Bounding
    if (bounding.top >=0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)&&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) { // window parameters
      console.log(true);
      sections[i].classList.add('nav_active');
    } else {
      console.log(false);
      sections[i].classList.remove('nav_active');
    }
  }
};
//>> can't get my nav_active working on cellphone and ipad formats, I think the problem
//>> is coming from the bounding.right and left but don't know how to fix it.

// call function to make it nav_active
document.addEventListener("scroll", function() { // when scrolling, apply isInViewport function
  isInViewport();
});

//// Scroll to anchor ID using scrollTO event
const anchors = document.getElementsByTagName('a') // find the anchors
for (let i=0; i<sections.length;i++) {  // for each section in sections
  let element = sections[i];
  let anchor = anchors[i];

  anchor.addEventListener('click', (e) => {  //evenlistener on click
    e.preventDefault();
    element.scrollIntoView({behavior:"smooth"}) // scroll smoothly
  })
}

// Hide Navbar when scrolling

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

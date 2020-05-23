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

/**
 * Define Global Variables
 *
*/


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

let ul = document.querySelector('ul');
let links = ['Home', 'Work', 'About', 'Contact']

links.forEach((link)=> {
  const li = document.createElement('li');
  li.innerText = link;
  ul.appendChild(li);
})


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar__list');
  //const navLinks = document.querySelectorAll('.navbar__list li');

  burger.addEventListener('click',()=> {
    nav.classList.toggle('nav_active');
    /*navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = 'navLinkFade 0,5s ease forwards $‘{index/7 +1,5}s';
      }
    })*/
  });
};
navSlide();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

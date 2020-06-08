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
const navSec = Array.from(document.querySelectorAll('li'));
const ul = document.querySelectorAll('ul');
const nav_list = document.querySelector('.navbar__list');

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
  const id = document.createElement('id'); //
  const anch = document.createElement('a');
  const sectionId = sections[i].id;
  anch.innerHTML = sections[i].id;
  anch.setAttribute("href", `#${sectionId}`);
  nav_list.appendChild(li);
  id.appendChild(anch);
  li.appendChild(id);
  id.setAttribute("id",`#${sectionId}`);
};

//burger and menu in mobile format
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar__list');

  burger.addEventListener('click',()=> {
    nav.classList.toggle('burger_active');
  });
};
navSlide();

// Add class 'active' to section when near top of viewport - made with help of udacity Ask a Mentor forum
function isInViewport () {  //create the function isInViewport
  for (let i=0; i<sections.length;i++) { //for loop to get the sections
    const bounding = sections[i].getBoundingClientRect(); // const get Bounding
    if (bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)&&
      bounding.bottom <= 736)
    { // window parameters
        const id = sections[i].getAttribute('id'); // give id for section in view
        document.getElementById('#'+id).classList.add('active');
        document.getElementById(id).classList.add('active');

    } else {
        const id = sections[i].getAttribute("id");
        document.getElementById('#'+id).classList.remove('active');
        document.getElementById(id).classList.remove('active');
    }
  }
};

// call function to make it nav_active
document.addEventListener("scroll", function() { // when scrolling, apply isInViewport function
  isInViewport();
});

// Scroll to anchor ID using scrollTO event
const anchors = document.getElementsByTagName('a') // find the anchors
for (let i=0; i<sections.length;i++) {  // for each section in sections
  let element = sections[i];
  let anchor = anchors[i];

  anchor.addEventListener('click', (e) => {  //eventlistener on click
    e.preventDefault();
    element.scrollIntoView({behavior:"smooth"}) // scroll smoothly
  })
}

//hide nav bar when scrolling down - code made with help of w3school
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar__menu").style.display = "flex";
  } else {
    document.querySelector(".navbar__menu").style.display = "none";
  };
  prevScrollpos = currentScrollPos;
};

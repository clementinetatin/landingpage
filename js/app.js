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
/*function makeActive() {
  for (const section of sections) {
    const bounding = section.getBoundingClientRect();
    return (
        bounding.top <= 150 &&
        bounding.bottom >= 150;
    );
  }
}*/

function isInViewport () {
  for (const section of sections) {
    const bounding = section.getBoundingClientRect();
    if (bounding.top >=467 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)&&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      return true;
    } else {
      return false;
    }
  }
};
document.addEventListener("scroll", function() {
  isInViewport();
});

function ifTrue() {
  for (const section of sections) {
    if(isInViewport() === true) {
      section.classList.add('.your-active-class');
    } else {
      section.classList.remove('.your-active-class');
    }
  }
}

ifTrue();



/*document.addEventListener("scroll", function() {
  makeActive();
);
};*/


/*const bounding = sections.getBoundingClientRect();
if (
  bounding.top >=0 &&
  bounding.left >= 0 &&
  bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
) {
  console.log('in the viewport !');
} else {
  console.log('not in the viewport');
};



// call function to make it nav_active

})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

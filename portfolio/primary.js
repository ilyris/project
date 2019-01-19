// AR - something you might consider is running your code through a 'linter'
// I use ESLint and you can apply different style guide requirements to your code
// like AirBnb or Google's JS standards, for example
const projectDescriptions = document.querySelectorAll('.project-description');
const smallProjectContainers = document.querySelectorAll('.small-project-container');
const bigProjectContainers = document.querySelector('.big-project-container');
const projectDescriptionEven = document.querySelector('.project-cards:nth-child(even) .project-description');
const contactMe = document.querySelector('.card-4-container');
const cardOneButton = document.querySelector('.contact-link-block');
const cardOneImage = document.querySelector('.image-container');
const firstLargeCardOneWord = document.querySelector('.code-word');
const firstLargeCardOneWordContainer = document.querySelector('.code-word-container');
const secondLargeCardOneWord = document.querySelector('.last-name');
const hook = document.querySelector('.intro-container');
const mainNav = document.querySelector('.main-nav');
const logo = document.querySelector('.logo');
const mainLinks = document.querySelectorAll('.main-links');
const animateSkills = document.querySelectorAll('.skills');
const hamburgerMenu = document.querySelector('.hamburger-menu');


hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  this.classList.toggle('toggle-active');
  document.querySelector('.main-ul').classList.toggle('on');
}

window.onscroll = () => {
  animateElementsBasedOnWindowMeasurements();
  setTopOfElements();
  toggleScrolledNavigationBackground();
};

function setTopOfElements() {
   const scrolled = document.documentElement.scrollTop;

      // projectDescriptions[0].style.top = -80 + scrolled * 0.04 + 'px';
    // projectDescriptions[1].style.top = -110 + scrolled * 0.06 + 'px';
    // projectDescriptions[2].style.top = -120 + scrolled * 0.08 + 'px';
    // bigProjectContainers.style.top = -100 - scrolled * 0.06 + 'px';
    // smallProjectContainers[0].style.top = -100 - scrolled * 0.05 + 'px';
    // smallProjectContainers[1].style.top = -100 - scrolled * 0.06 + 'px';
    // hook.style.top = 0 - scrolled * 0.25 + 'px';
    // firstLargeCardOneWord.style.top = 0 - scrolled * 0.2 + 'px';
    // secondLargeCardOneWord.style.top = 400 - scrolled * 0.1 + 'px';
    // cardOneImage.style.top = 0 - scrolled * 0.05 + 'px';
    // cardOneButton.style.top = 0 + scrolled * 0.05 + 'px';

    // Scroll Parallax for my projects
    const offsets = [-80, -110, -120];
    // you can also omit the return statement and the curly braces in these cases
    const projectScrollParallaxRate = i => 0.04 + 0.02 * i;

    for (let i = 0; i < projectDescriptions.length; i++) {
      // AR - here and throughout your code we could use a template literal in place of string concatenation
      // I think they are easier to read, and then you don't have to worry about escaping quotes (not relevant in this case)
      projectDescriptions[i].style.top =  offsets[ i ]  + scrolled * projectScrollParallaxRate( i ) + 'px';
    }

    bigProjectContainers.style.top = -100 - scrolled * 0.06 + 'px';
    smallProjectContainers[0].style.top = -100 - scrolled * 0.05 + 'px';
    smallProjectContainers[1].style.top = -100 - scrolled * 0.06 + 'px';
    hook.style.top = 0 - scrolled * 0.25 + 'px';
    firstLargeCardOneWord.style.top = 0 - scrolled * 0.2 + 'px';
    secondLargeCardOneWord.style.top = 400 - scrolled * 0.1 + 'px';
    cardOneImage.style.top = 0 - scrolled * 0.05 + 'px';
    cardOneButton.style.top = 0 + scrolled * 0.05 + 'px';
}

const toggleScrolledNavigationBackground = () => {
  mainNav.classList.toggle(
    'scrolled-nav-background',  
    // AR - it might help to encapsulate these values into a variable for easier reference and reading
    // meaning, it's not immediately obvious to me what this arithmetic is accomplishing
    mainNav.scrollTop / screen.height > 0.75 ||
      document.documentElement.scrollTop / screen.height > 0.75 // put numbers into variable for future reference. ******
  );
  if (mainNav.classList.contains('scrolled-nav-background')) {
    logo.style.color = '#fff';

    mainLinks.forEach( (link) => {
      link.style.color ="#fff";
    })
   } else {
    logo.style.color = '#000';
    for (let i = 0; i < mainLinks.length; i++) {
      mainLinks[i].style.color = '#000';
    }
  }
}

  // Scroll Parallax for my projects
const animateElementsBasedOnWindowMeasurements = () => {
  const yPosition = window.pageYOffset;
  if (window.outerWidth < 740) {
    for (let i = 0; i < animateSkills.length; i++) {
      animateSkills[i].style.visibility = 'visible';
    }
  } else if (yPosition > 80 && window.outerWidth > 740) {
    for (let i = 0; i < animateSkills.length; i++) {
      animateSkills[i].classList.add('fall-in-animation');
    }
  }

  // AR - have you considered using a switch statement here?
  if (yPosition >= 700 ) {
    smallProjectContainers[0].classList.add('fadeInRight');
    projectDescriptions[0].classList.add('fadeInLeft');
  }
  if (yPosition >= 1200) {
    bigProjectContainers.classList.add('fadeInLeft');
    projectDescriptionEven.classList.add('fadeInRight');
  }
  if (yPosition >= 1500) {
    smallProjectContainers[1].classList.add('fadeInRight');
    projectDescriptions[2].classList.add('fadeInLeft');
  }
  if (yPosition > 2000) {
    contactMe.classList.add('fadeInUp');
  }
}

//const mouseMoveParallax = () => {
// // ****** Fires mouseover Parallax effect ******//
// const parallaxContainer = document.getElementById('card-1');
// parallaxContainer.addEventListener('mousemove', e => {
// let screenWidth = window.outerWidth;
//   let screenHeight = window.outerHeight;

//   // Elements move based on cursor movement
//   cardOneImage.style.transform ='translate(-' +(e.pageX / screenWidth) * 10 +'px, -' +(e.pageY / screenHeight) * 10 +'px)';
//   firstLargeCardOneWordContainer.style.transform ='translate(' +(e.pageX / screenWidth) * 15 +'px, ' +(e.pageY / screenHeight) * 15 +'px)';
//   secondLargeCardOneWord.style.transform ='translate(' +(e.pageX / screenWidth) * 15 +'px, ' +(e.pageY / screenHeight) * 15 +'px)';
//   hook.style.transform ='translate(' +(e.pageX / screenWidth) * 15 +'px, ' +(e.pageY / screenHeight) * 15 +'px)';
//   cardOneButton.style.transform ='translate(' +(e.pageX / screenWidth) * 15 +'px, ' +(e.pageY / screenHeight) * 15 +'px)';
// });
//}


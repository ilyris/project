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
const mainNav = document.querySelector('.main-nav');
const logo = document.querySelector('.logo');
const mainLinks = document.querySelectorAll('.main-links');
const animateSkills = document.querySelectorAll('.skills');
// const hamburgerMenu = document.querySelector('.hamburger-menu');
document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu, false);


window.onscroll = () => {
  animateElementsBasedOnWindowMeasurements();
  setTopOfElements();
  toggleScrolledNavigationBackground();
};
function toggleMenu() {
  this.classList.toggle("toggle-active");
  const hamburgerMenu = document.querySelector('.hamburger-menu').classList;
  const wrapper = document.getElementById('mobileMenuWrapper').classList;

  if(hamburgerMenu.contains("toggle-active")) {
    wrapper.add("mobileOn");
    wrapper.toggle("translateUp");
  } else if(!hamburgerMenu.contains('toggle-active')) {
    wrapper.remove("translateUp");
  }

}
function setTopOfElements() {
   const scrolled = document.documentElement.scrollTop;


    // Scroll Parallax for my projects
    const offsets = [-80, -110, -120];
    const projectScrollParallaxRate = i => 0.04 + 0.02 * i;

    for (let i = 0; i < projectDescriptions.length; i++) {
      projectDescriptions[i].style.top =  offsets[ i ]  + scrolled * projectScrollParallaxRate( i ) + 'px';
    }

    bigProjectContainers.style.top = -100 - scrolled * 0.06 + 'px';
    smallProjectContainers[0].style.top = -100 - scrolled * 0.05 + 'px';
    smallProjectContainers[1].style.top = -100 - scrolled * 0.06 + 'px';
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

const toggleScrolledNavigationBackground = () => {
  const mainNav = document.getElementById("menuBarWrapper");
  const mainLinks = document.getElementsByClassName("menuLinkAnchors");
  const logo = document.querySelector("#logoContainer .logo a");
  mainNav.classList.toggle(
    "scrolled-nav-background",
    mainNav.scrollTop / screen.height > 0.75 ||
      document.documentElement.scrollTop / screen.height > 0.75
  );
    if(mainNav.classList.contains('scrolled-nav-background') === true) {
      logo.classList.add('activated-scrolled-links');
        for(let i = 0; i < mainLinks.length; i++) {
          mainLinks[i].classList.add('activated-scrolled-links');
        }
    } else if(mainNav.classList.contains('scrolled-nav-background') === false) {
      logo.classList.remove('activated-scrolled-links');
        for(let i = 0; i < mainLinks.length; i++) {
          mainLinks[i].classList.remove('activated-scrolled-links');
      }
    }
};

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



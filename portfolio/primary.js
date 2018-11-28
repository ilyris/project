
const scrollButton = document.querySelector(".scroll-button");
const projectDescriptions = document.querySelectorAll(".project-description");
const smallProjectContainers = document.querySelectorAll(".small-project-container");
const bigProjectContainers = document.querySelector(".big-project-container");
const projectDescriptionEven = document.querySelector(".project-cards:nth-child(even) .project-description");
const contactMe = document.querySelector(".card-4-container");
const parallaxContainer = document.getElementById("#card-1");
const cardOneButton = document.querySelector(".contact-link-block");
const cardOneImage =   document.querySelector(".image-container");
const firstLargeCardOneWord =   document.querySelector(".code-word");
const firstLargeCardOneWordContainer =   document.querySelector(".code-word-container");
const secondLargeCardOneWord =   document.querySelector(".last-name");
const hook =   document.querySelector(".intro-container");


window.onscroll = () => {
  windowScroll();
};

const windowScroll = () => {
  const animateSkills = document.querySelectorAll(".skills");
  const mainNav = document.querySelector(".main-nav");
  const yPosition = window.pageYOffset;
  const scrolled = document.documentElement.scrollTop;


  mainNav.classList.toggle( "scrolled-nav-background", mainNav.scrollTop / screen.height > 0.75 
    || document.documentElement.scrollTop / screen.height > 0.75
  );

  for (let i = 0; i < animateSkills.length; i++) {
    if (yPosition > 80) {
      animateSkills[i].classList.add("fall-in-animation");
    }
  }
  for (let i = 0; i < projectDescriptions.length; i++) {
    if (yPosition > 900) {
      projectDescriptions[i].classList.add("slide-in-from-left");
      projectDescriptions[i].style.left = "100px";
    }
  }
  for (let i = 0; i < smallProjectContainers.length; i++) {
    if (yPosition > 900) {
      smallProjectContainers[i].classList.add("slide-in-from-right");
      bigProjectContainers.classList.add("slide-in-from-left");
      projectDescriptionEven.classList.add("slide-in-from-right");
    }
  }
  if (yPosition > 1550 && contactMe.classList.contains("hide")) {
    contactMe.classList.add("rise-from-bottom");
  }
  projectDescriptionEven.style.left = "-100px";
  //allows these three different elelements to be moved with the window scroll at different speeds.
  hook.style.top =0 - scrolled * 0.25 + "px";
  firstLargeCardOneWord.style.top = 0 - scrolled * 0.2 + "px";
  secondLargeCardOneWord.style.top = 400 - scrolled * 0.1 + "px";
  cardOneImage.style.top =0 - scrolled * 0.05 + "px";
  cardOneButton.style.top =0 + scrolled * 0.05 + "px";
};

// ****** Fires mouseover Parallax effect ******//
parallaxContainer.addEventListener("mousemove", e => {
  let screenWidth = window.outerWidth;
  let screenHeight = window.outerHeight;

  // Elements move based on cursor movement
  cardOneImage.style.transform ="translate(-" +(e.pageX / screenWidth) * 10 +"px, -" +(e.pageY / screenHeight) * 10 +"px)";
  firstLargeCardOneWordContainer.style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
  secondLargeCardOneWord.style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
  hook.style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
  cardOneButton.style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
});

document.querySelector(".hamburger-menu").addEventListener("click", toggleMenu);
function toggleMenu() {
  this.classList.toggle("toggle-active");
  document.querySelector(".main-ul").classList.toggle("on");
}

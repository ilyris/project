const links = document.getElementsByTagName("a");
const scrollButton = document.querySelector(".scroll-button");
const projectDescriptions = document.querySelectorAll(".project-description");
const smallProjectContainers = document.querySelectorAll(".small-project-container");
const bigProjectContainers = document.querySelector(".big-project-container");
const projectDescriptionEven = document.querySelector(".project-cards:nth-child(even) .project-description");
const contactMe = document.querySelector(".card-4-container");

//runs the function WindowScroll onscroll
window.onscroll = () => {
  windowScroll();
};
const windowScroll = () => {
  const animateSkills = document.querySelectorAll(".skills");
  const yPosition = window.pageYOffset;
  const scrolled = document.documentElement.scrollTop;
  const mainNav = document.querySelector(".main-nav");
  mainNav.classList.toggle(
    //if mainNav does not have an attribute of scrolled-nav-background then it turns true and runs adds the class "scrolled-nav-background"
    "scrolled-nav-background",
    //mainNav is set to have the background set to true when it is scrolled > 600
    mainNav.scrollTop / screen.height > 0.75 ||
      document.documentElement.scrollTop / screen.height > 0.75
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
  document.querySelector(".intro-container").style.top =0 - scrolled * 0.25 + "px";
  document.querySelector(".code-word").style.top = 0 - scrolled * 0.2 + "px";
  document.querySelector(".last-name").style.top = 400 - scrolled * 0.1 + "px";
  document.querySelector(".image-container").style.top =0 - scrolled * 0.05 + "px";
  document.querySelector(".contact-link-block").style.top =0 + scrolled * 0.05 + "px";
};

// ****** Fires mouseover Parallax effect ******//
const parallaxContainer = document.querySelector("#card-1");
parallaxContainer.addEventListener("mousemove", e => {
  //storing the windows outer width into a variable so we can use it in our mousemove function
  let screenWidth = window.outerWidth;
  //storing the windows outer height into a variable so we can use it in our mousemove function
  let screenHeight = window.outerHeight;
  // allows the image-container element to move with the mouse
  document.querySelector(".image-container").style.transform ="translate(-" +(e.pageX / screenWidth) * 10 +"px, -" +(e.pageY / screenHeight) * 10 +"px)";
  document.querySelector(".code-word-container").style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
  document.querySelector(".last-name").style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
  document.querySelector(".intro-container").style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
  document.querySelector(".contact-link-block").style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
});

document.querySelector(".toggle-mnu").addEventListener("click", toggleMenu);
function toggleMenu() {
  this.classList.toggle("toggle-active");
  document.querySelector(".main-ul").classList.toggle("on");
}

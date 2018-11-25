
const links = document.getElementsByTagName("a");
const scrollButton = document.querySelector('.scroll-button');


//runs the function WindowScroll onscroll
window.onscroll =  () => {
  windowScroll();
};
// fires all window scrolling effects
const windowScroll = () => {
  //grabs the element with a class of "main-nav"
  const mainNav = document.querySelector(".main-nav");
  //classList adds class scrolled-nav-background if the variable "MainNav" does not have that class
  mainNav.classList.toggle(
    //if mainNav does not have an attribute of "test" then it turns true and runs test
    "scrolled-nav-background",
    //mainNav is set to have the background set to true when it is scrolled > 600
    mainNav.scrollTop / screen.height > .75 || document.documentElement.scrollTop / screen.height  > .75
  );
  
  const animateSkills = document.querySelectorAll(".skills");
  const yPosition = window.pageYOffset;
  for (let i = 0; i < animateSkills.length; i++) {
    if (yPosition > 80) {
      animateSkills[i].classList.add("fall-in-animation");
    }
  }
  //stores the windows scroll movment into the document element, document object.
  const scrolled = document.documentElement.scrollTop;
  //allows these three different elelements to be moved with the window scroll at different speeds.

    document.querySelector('.intro-container').style.top = 0 - scrolled * .25 + "px";
    document.querySelector('.first-name').style.top = 0 - scrolled * .20 + "px";
    document.querySelector('.last-name').style.top = 400 - scrolled * .10 + "px";
    document.querySelector('.image-container').style.top = 0 - scrolled * .05 + "px";
    document.querySelector('.contact-link-block').style.top = 0 + scrolled * .05 + "px";
};

//grabs the element .toggle-mnu and adds an event list
document.querySelector(".toggle-mnu").addEventListener("click",toggleMenu);

function toggleMenu() {
  this.classList.toggle ("toggle-active");
document.querySelector(".main-ul").classList.toggle("on");
}

// storing the card-1 element into a variable to use in a mousemove function
const parallaxContainer = document.querySelector('#card-1');
  //create a function and attach an eventlister that listens for mouse movement
parallaxContainer.addEventListener ("mousemove", function(e) {
  //storing the windows outer width into a variable so we can use it in our mousemove function
  let screenWidth = window.outerWidth;
  //storing the windows outer height into a variable so we can use it in our mousemove function
  let screenHeight = window.outerHeight;
  // allows the image-container element to move with the mouse
  document.querySelector(".image-container").style.transform = 'translate(-' + e.pageX/screenWidth * 10 + 'px, -' + e.pageY/screenHeight * 10 + "px)";
  document.querySelector(".first-name-container").style.transform = "translate(" + e.pageX/screenWidth * 15 + "px, " + e.pageY/screenHeight * 15 + "px)";
  document.querySelector(".last-name").style.transform = "translate(" + e.pageX/screenWidth * 15 + "px, " + e.pageY/screenHeight * 15 + "px)";
  document.querySelector(".intro-container").style.transform = "translate(" + e.pageX/screenWidth * 15 + "px, " + e.pageY/screenHeight * 15 + "px)";
  document.querySelector(".contact-link-block").style.transform = "translate(" + e.pageX/screenWidth * 15 + "px, " + e.pageY/screenHeight * 15 + "px)";
});
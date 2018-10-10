// var links grabs all links by tag name "a"
var links = document.getElementsByTagName("a");
var scrollButton =document.querySelector('scroll-button');
//since TagName grabs multiple tags, and turns them into a HTML collection
//a Loop has to be specified in order to loop through all the links
for (var i = 0; i < links.length; i++) {
  //adding a click even listener and passing in our function called "clickFunction" so on click fire the 
  links[i].addEventListener("click", clickFunction);
  // if(scrollButton == "clicked"){
  //   $("html, body").animate({
  //     scrollTop: $(".scroll-button").offset().top
  // }, 1000);
  // }
}
function clickFunction() {
  scrollButton.animate([scrollTop.offset().top],{ duration: 1000});
  console.log("clicked");
}

//runs the function WindowScroll onscroll
window.onscroll = function () {
  windowScroll();
};
// sets up the background for the navbar on scroll
function windowScroll() {
  //graabs the element with a class of "main-nav"
  var mainNav = document.querySelector(".main-nav");
  //classList adds class scrolled-nav-background if the variable "MainNav" does not have that class
  mainNav.classList.toggle(
    //if mainNav does not have an attribute of "test" then it turns true and runs test
    "scrolled-nav-background",
    //mainNav is set to have the background set to true when it is scrolled > 600
    mainNav.scrollTop / screen.height > .75 || document.documentElement.scrollTop / screen.height  > .75
  );
  var animateSkills = document.querySelectorAll(".skills");
  var yPosition = window.pageYOffset;
  for (var i = 0; i < animateSkills.length; i++) {
    // if (yPosition <= 149) {
    //   animateSkills[i].classList.remove("hide");
    // }
    // else
    if (yPosition > 80) {
      animateSkills[i].classList.add("fall-in-animation");
      //animateSkills[i].classList.remove("hide");    Didnt need, kept for reference
    }
  }
  //stores the windows scroll movment into the document element, document object.
  var scrolled = document.documentElement.scrollTop;
  //allows these three different elelements to be moved with the window scroll at different speeds.
    document.querySelector('.about-me-container').style.top = 0 - scrolled * .25 + "px";
    document.querySelector('.first-name').style.top = 0 - scrolled * .20 + "px";
    document.querySelector('.last-name').style.top = 350 - scrolled * .10 + "px";
    document.querySelector('.image-container').style.top = 0 - scrolled * .05 + "px";
    document.querySelector('.contact-link-block').style.top = 0 + scrolled * .05 + "px";

};

//grabs the element .toggle-mnu and adds an event list
document.querySelector(".toggle-mnu").addEventListener("click",toggleMenu);

function toggleMenu(){
  this.classList.toggle ("toggle-active");
document.querySelector(".main-ul").classList.toggle("on");
}


// storing the card-1 element into a variable to use in a mousemove function
var parallaxContainer = document.querySelector('.card-1');
  //create a function and attach an eventlister that listens for mouse movement
   parallaxContainer.addEventListener ("mousemove", function(e) {
    //storing the windows outer width into a variable so we can use it in our mousemove function
    let screenWidth = window.outerWidth;
    //storing the windows outer height into a variable so we can use it in our mousemove function
    let screenHeight = window.outerHeight;
    // allows the image-container element to move with the mouse
    document.querySelector(".image-container").style.transform = 'translate(-' + e.pageX/screenWidth * 10 + 'px, -' + e.pageY/screenHeight * 10 + "px)";
    // allows the first-name element to move with the mouse
    document.querySelector(".first-name").style.transform = "translate(" + e.pageX/screenWidth * 15 + "px, " + e.pageY/screenHeight * 15 + "px)";
    // allows the last-name element to move with the mouse
    document.querySelector(".last-name").style.transform = "translate(" + e.pageX/screenWidth * 15 + "px, " + e.pageY/screenHeight * 15 + "px)";
    document.querySelector(".about-me-container").style.transform = "translate(" + e.pageX/screenWidth * 15 + "px, " + e.pageY/screenHeight * 15 + "px)";
    document.querySelector(".contact-link-block").style.transform = "translate(" + e.pageX/screenWidth * 15 + "px, " + e.pageY/screenHeight * 15 + "px)";
  });
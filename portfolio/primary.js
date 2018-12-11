const scrollButton = document.querySelector(".scroll-button");
const projectDescriptions = document.querySelectorAll(".project-description");
const smallProjectContainers = document.querySelectorAll(".small-project-container");
const bigProjectContainers = document.querySelector(".big-project-container");
const projectDescriptionEven = document.querySelector(".project-cards:nth-child(even) .project-description");
const contactMe = document.querySelector(".card-4-container");
const parallaxContainer = document.getElementById("card-1");
const cardOneButton = document.querySelector(".contact-link-block");
const cardOneImage = document.querySelector(".image-container");
const firstLargeCardOneWord = document.querySelector(".code-word");
const firstLargeCardOneWordContainer = document.querySelector(".code-word-container");
const secondLargeCardOneWord = document.querySelector(".last-name");
const hook = document.querySelector(".intro-container");

// Alex:  Let's put all query selectors at the top of the file, instead of spread out.
//      Also, let's remove unused selectors if there are no plans to do anything with them.

document.querySelector(".hamburger-menu").addEventListener("click", toggleMenu);
function toggleMenu() {
  this.classList.toggle("toggle-active");
  document.querySelector(".main-ul").classList.toggle("on");
}

// Create function to check the screens width
const checkScreenWidth = () => {
  if (window.outerWidth > 740) {
    for (let i = 0; i < projectDescriptions.length; i++) {
      projectDescriptions[i].style.left = "100px";
      projectDescriptionEven.style.left = "-100px";
    }
  } else if (window.outerWidth < 740) {
    for (let i = 0; i < projectDescriptions.length; i++) {
      projectDescriptions[i].style.left = "auto";
      projectDescriptionEven.style.left = "auto";
    }
  }
};

checkScreenWidth();

window.onresize = () => {
  windowResize();
};
const windowResize = () => {
  checkScreenWidth();
};

/* Alex: we could simplify the methods above to: window.onscroll = windowScroll;
      but there may be a better idea.  In order to make the code easier
      to understand and to maintain:
      We could split up the main windowScroll function into something like:

window.onscroll = function doRender() => {
  setTopProperties();
  toggleColors();
  .. etc
};
*/

window.onscroll = () => {
  windowScroll();
};

// Alex: One way to split this method up, as noted above,
//     is to separate the logical groups into their own methods,
//     and then the code becomes self documenting.
//     There are even comments already explaining those groups!  That's a good place to start.

// Alex: Performance was noted to be an issue, although it seems fine on my development machines :)
//     One thing we could look at is requestAnimationFrame for asynchronous rendering.
const windowScroll = () => {
  // Alex: I'm not sure, but if we move these
  //     query selectors outside of the scroll event handler,
  //     we may get a performance improvement.
  const mainNav = document.querySelector(".main-nav");
  const logo = document.querySelector(".logo");
  const mainLinks = document.querySelectorAll(".main-links");
  const yPosition = window.pageYOffset;
  const animateSkills = document.querySelectorAll(".skills");
  const scrolled = document.documentElement.scrollTop;

  // Alex: why do we have a for loop here?
  // Scroll Parallax for my projects
  for (let i = 0; i < projectDescriptions.length; i++) {

    // Alex: there seems to be some repetitive code here.  Maybe we can do something about this.
    //    Not perfect, but might be an improvement.  Where do the offset numbers come from?
    /*
     function setTop( element, offset, scrollRate ){
        element.style.top = offset + scrolled * scrollRate + "px";
      };

      setTop( projectDescriptions[0].style.top, -80, 0.04 );
      setTop( projectDescriptions[1].style.top, -110, 0.06 );
      */
    projectDescriptions[0].style.top = -80 + scrolled * 0.04 + "px";
    projectDescriptions[1].style.top = -110 + scrolled * 0.06 + "px";
    projectDescriptions[2].style.top = -120 + scrolled * 0.08 + "px";
    bigProjectContainers.style.top = -100 - scrolled * 0.06 + "px";
    smallProjectContainers[0].style.top = -100 - scrolled * 0.05 + "px";
    smallProjectContainers[1].style.top = -100 - scrolled * 0.06 + "px";
    hook.style.top = 0 - scrolled * 0.25 + "px";
    firstLargeCardOneWord.style.top = 0 - scrolled * 0.2 + "px";
    secondLargeCardOneWord.style.top = 400 - scrolled * 0.1 + "px";
    cardOneImage.style.top = 0 - scrolled * 0.05 + "px";
    cardOneButton.style.top = 0 + scrolled * 0.05 + "px";
  }

  //Main Navigation Scrolled Background
  mainNav.classList.toggle(
    "scrolled-nav-background",
    mainNav.scrollTop / screen.height > 0.75 ||
      document.documentElement.scrollTop / screen.height > 0.75
  );
  if (mainNav.classList.contains("scrolled-nav-background")) {
    logo.style.color = "#fff";
    for (let i = 0; i < mainLinks.length; i++) {
      mainLinks[i].style.color = "#fff";
    }
  } else {
    logo.style.color = "#000";
    for (let i = 0; i < mainLinks.length; i++) {
      mainLinks[i].style.color = "#000";
    }
  }

  // Animates the Skills section, Project section, and about me container.
  if (window.outerWidth < 740) {
    // Alex: This seems buggy, lets discuss what's going on with this one.
    for (let i = 0; i < projectDescriptions.length; i++) {
      console.log("nothing");
      animateSkills[i].style.visibility = "visible";
      animateSkills[3].style.visibility = "visible";
      animateSkills[4].style.visibility = "visible";
      animateSkills[5].style.visibility = "visible";
    }
  } else if (yPosition > 80 && window.outerWidth > 740) {
    console.log("i ran");
    for (let i = 0; i < animateSkills.length; i++) {
      animateSkills[i].classList.add("fall-in-animation");
    }
  }

  // Alex: Can we eliminate the for loop here?
  for (let i = 0; i < projectDescriptions.length; i++) {
    if (yPosition >= 700) {
      smallProjectContainers[0].classList.add("rotateInUpRight");
      projectDescriptions[0].classList.add("rotateInUpLeft");
    }
    if (yPosition >= 1200) {
      bigProjectContainers.classList.add("rotateInUpLeft");
      projectDescriptionEven.classList.add("rotateInUpRight");
    }
    if (yPosition >= 1500) {
      smallProjectContainers[1].classList.add("rotateInUpRight");
      projectDescriptions[2].classList.add("rotateInUpLeft");
    }
  }

  if (yPosition > 2000) {
    contactMe.classList.add("fadeInUp");
  }

  if (yPosition > 2000) {
    contactMe.classList.add("fadeInUp");
  }
};

// // ****** Fires mouseover Parallax effect ******//
// parallaxContainer.addEventListener("mousemove", e => {
// let screenWidth = window.outerWidth;
//   let screenHeight = window.outerHeight;

//   // Elements move based on cursor movement
//   cardOneImage.style.transform ="translate(-" +(e.pageX / screenWidth) * 10 +"px, -" +(e.pageY / screenHeight) * 10 +"px)";
//   firstLargeCardOneWordContainer.style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
//   secondLargeCardOneWord.style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
//   hook.style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
//   cardOneButton.style.transform ="translate(" +(e.pageX / screenWidth) * 15 +"px, " +(e.pageY / screenHeight) * 15 +"px)";
// });

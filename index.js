const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("modal-active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("modal-active");
  overlay.classList.remove("overlayactive");
};


// Dark Mode

var dark = document.querySelector('#wrapper');
var navBtn = document.querySelectorAll('.nav_btn');
var navIcon = document.querySelector('.navbar-toggler-icon');
var project = document.querySelector('.project-section');
var education = document.querySelector('.education-section');


var darkMode = document.getElementById('toggledark');

darkMode.addEventListener('click',function(){

  this.classList.toggle('bi-moon-fill');

  if(this.classList.toggle('bi-brightness-high-fill'))
  {
    dark.classList.add("dark-wrapper");
    navIcon.classList.add("navbar-toggler-dark");
    project.classList.add("project-section-dark");
    education.classList.add("education-section-dark");
    darkMode.style.fontSize = '22px';

    navBtn.forEach(element => {
      element.classList.add("text-white");
    });
  }

  else
  {
    dark.classList.remove("dark-wrapper");
    dark.classList.add("light-animation");
    navIcon.classList.remove("navbar-toggler-dark");
    project.classList.remove("project-section-dark");
    education.classList.remove("education-section-dark");
    education.classList.add("light-animation");
    darkMode.style.fontSize = '22px';

    navBtn.forEach(element => {
      element.classList.remove("text-white");
    });
  }
})
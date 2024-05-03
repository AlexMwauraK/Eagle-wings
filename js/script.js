//Menu Burger homepage
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navlinks');
  const navlinks = document.querySelectorAll('.navlinks li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      }else{
        link.style.animation = `navlinkFade 0.5s ease forward ${index / 7 + 4 }s`;
      } 
    });
    burger.classList.toggle('toggles');
  });
}
navSlide();
// Animations 
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else
    {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.animate, .animate2, .animate3, .animate4');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('load', function () {
const preloader = document.querySelector('.preloader');
setTimeout(function () {
preloader.style.opacity = '0';
setTimeout(function () {
  preloader.style.display = 'none';
}, 500); // Adjust the delay as needed
}, 1000); // Adjust the delay as needed
}); 
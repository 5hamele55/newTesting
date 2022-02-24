const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-left");
  let isOpen = false
  hamburger.addEventListener('click', () => {
    isOpen = !isOpen
    hamburger.classList.toggle('toggle');
    if (isOpen) nav.classList.add("nav-active")
    else nav.classList.remove("nav-active")
  })
}
navSlide();
$(document).ready(function () {
  $('.hero-right').slick({
    arrows: false,
    infinite: false
  });
});
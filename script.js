//          DOM <
//  navigation modal
const modal = document.querySelector("#navigation-box");
const openModal = document.querySelector("#hamburger-container");
const overlay = document.querySelector("#overlay");

const thumbimg = document.querySelector(".project-img");
const toWebsite = document.querySelector(".to-website-container");
//  navigation modal
//          DOM >

//      MODAL <
openModal.onclick = () => {
    modal.style.display = "flex"
    overlay.style.display = "block"
    openModal.style.display = "none"
}
overlay.onclick = () => {
    modal.style.display = "none"
    overlay.style.display = "none"
    openModal.style.display = "block"
}
modal.onclick = () => {
    modal.style.display = "none"
    overlay.style.display = "none"
    openModal.style.display = "block"
}
//      MODAL >

//      TO THE WEBSITE  >
thumbimg.onmouseover = () => {
    thumbimg.style.backgroundColor = "black"
    toWebsite.style.display = "block"
}

thumbimg.onmouseout = () => {
    toWebsite.style.display = "none"
}
//      TO THE WEBSITE  <


// slideshow <
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//slideshow >
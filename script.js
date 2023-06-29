//          DOM <
//  navigation modal
const modal = document.querySelector("#navigation-box");
const openModal = document.querySelector("#hamburger-container");
const overlay = document.querySelector("#overlay");

const thumbimg = document.querySelector(".project-img");
const toWebsite = document.querySelector(".to-website-container");
//  navigation modal
//          DOM >

//    SLIDES <
const slides = [
  {
    title: 'Slide 1',
    content: 'Content 1'
  },
  {
    title: 'Slide 2',
    content: 'Content 1'
  },
  {
    title: 'Slide 2',
    content: 'Content 1'
  }
]
//    SLIDES >

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
let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
//slideshow >
//          DOM <
//  navigation modal
const modal = document.querySelector("#navigation-box");
const openModal = document.querySelector("#hamburger-container");
const overlay = document.querySelector("#overlay")
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
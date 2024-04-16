const menuMobile = document.querySelector(".menu-mobile");
const menuLinks = document.querySelectorAll(".link");
const menuIcon = document.querySelector(".hamburger");
let menuAtivo = false;

function openMenu() {
    if (menuAtivo) {
        closeMenu();
        return;
    }
    menuMobile.classList.add("active");
    menuIcon.classList.add("fa-xmark");
    menuLinks.forEach(el => {
        el.classList.add("animation-links");
    })
    menuAtivo = true;
}

function closeMenu() {
    menuMobile.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
    menuLinks.forEach(el => {
        el.classList.remove("animation-links");
    })
    menuAtivo = false;
}

menuLinks.forEach(element => {
    element.addEventListener('click', () => {
        closeMenu();
    })
});

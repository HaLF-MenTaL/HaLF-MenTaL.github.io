const navBar = document.querySelector("#nav-bar");
const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-links-cont");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


//NavBar Changing on Scroll
const header = document.querySelector("#header");
if (window.innerWidth > 850) {
    window.onscroll = () => {
        if (window.scrollY >= 75) {
            navBar.classList.add("active");
        } else {
            navBar.classList.remove("active");
        }
    }
};
const menuBtn = document.querySelector("#menu-btn");
const links = document.querySelector(".links");
const navHead = document.querySelector(".nav-header");

menuBtn.addEventListener("click", () => {
    navHead.classList.toggle("nav-shadow");
    // links.classList.toggle("show-links");
});

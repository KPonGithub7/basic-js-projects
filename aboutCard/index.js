import { people } from "./data.js";

//select items
const img = document.getElementById("person-img");
const name = document.getElementById("author");
const role = document.getElementById("role");
const about = document.getElementById("about-person");

//buttons

const prevBtn = document.querySelector("#left-btn");
const nextBtn = document.querySelector("#right-btn");
const randomBtn = document.querySelector("#random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", () => {
    console.log("hello this is the dom content load test");
    showPerson(currentItem);
});

//show person based on item
function showPerson(currentItem) {
    const item = people[currentItem];
    img.src = item.image;
    name.textContent = item.name;
    role.textContent = item.role;
    about.textContent = item.about;
}

//show next person
nextBtn.addEventListener("click", () => {
    currentItem++;
    currentItem = currentItem % people.length;
    showPerson(currentItem);
});

//show previous person
prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = people.length - 1;
    }
    showPerson(currentItem);
});

//show random person
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * people.length);
    showPerson(currentItem);
});

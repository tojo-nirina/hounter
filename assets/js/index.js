const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
    body.classList.toggle('open');
})

const itemNav = document.querySelectorAll(".item-nav");
itemNav.forEach(item => {
    item.addEventListener("click", () => {
        body.classList.toggle('open');
    })
})

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const mainFlou = document.getElementById("main");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    mainFlou.classList.toggle("blurred");
})


/*  JavaScript del Header */

// nav toggle - select button and links 

const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

const aparecer = document.querySelector(".selector-Nav")
const nicolas = document.querySelector(".nav-link-desplagable")

// add event listener

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

aparecer.addEventListener("click", () => {
    nicolas.classList.toggle("nav-link-aparecer")
    aparecer.classList.toggle("link-hover")
})
/*  JavaScript del Header */

// nav toggle - select button and links 

const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

const itemSelector = document.querySelector(".selector-Nav")
const mostrarDiv = document.querySelector(".nav-link-desplagable")

// add event listener

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

itemSelector.addEventListener("click", () => {
    mostrarDiv.classList.toggle("nav-link-aparecer")
    itemSelector.classList.toggle("link-hover")
})
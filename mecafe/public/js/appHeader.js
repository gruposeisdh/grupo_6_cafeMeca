/*  JavaScript del Header */

// nav toggle - select button and links

const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// add event listener

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

console.log(navToggle)
console.log(nav)
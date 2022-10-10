/*  JavaScript del Header */

// nav toggle - select button and links 

const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// add event listener

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

// NavBar Desplegables

// Variables de cada uno de los items que quiero desplegar

const quienesSomos = document.getElementById("quienesSomos")
const navbarAdmin = document.getElementById("navbarAdmin")
const navbarPerfil = document.getElementById("navbarPerfil")

// Variables de Divs que queremos desplegar (Combinacion de IF con clase .nav-link-desplagable)

const DivQuienesSomos = document.querySelector("#quienesSomos .nav-link-desplagable")
const DivAdmin = document.querySelector("#navbarAdmin .nav-link-desplagable")
const DivPerfil = document.querySelector("#navbarPerfil .nav-link-desplagable")

// Funcion para Reutilizar

function desplegar (selectorId, DivDesplegar) {
    selectorId.addEventListener("click", () => {
        DivDesplegar.classList.toggle("nav-link-aparecer")
        selectorId.classList.toggle("link-hover")
    })
}

// Llamado a Funciones

desplegar(quienesSomos, DivQuienesSomos)
desplegar(navbarAdmin, DivAdmin)
desplegar(navbarPerfil, DivPerfil)


/*  JavaScript del Header */

// Seleccion del Boton - Seleccion de los links para mostrarlos

const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// Agregar evento de click para el menu.

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

// NavBar Desplegables

// Variables de cada uno de los items que quiero desplegar

const quienesSomos = document.getElementById("quienesSomos")
const navbarAdmin = document.getElementById("navbarAdmin")
const navbarPerfil = document.getElementById("navbarPerfil")

console.log(quienesSomos, "Quienes somos")
console.log(navbarAdmin, "Admin")
console.log(navbarPerfil, "pERFIL")

// Variables de Divs que queremos desplegar (Combinacion de ID con clase .nav-link-desplagable)

const divQuienesSomos = document.querySelector("#quienesSomos .nav-link-desplagable")
const divAdmin = document.querySelector("#navbarAdmin .nav-link-desplagable")
const divPerfil = document.querySelector("#navbarPerfil .nav-link-desplagable")



// Funcion para Reutilizar

function desplegar (selectorId, divDesplegar) {
    selectorId.addEventListener("click", () => {
        divDesplegar.classList.toggle("nav-link-aparecer")
        selectorId.classList.toggle("link-hover")
    })
}

// Llamado a Funciones

desplegar(quienesSomos, divQuienesSomos)
desplegar(navbarAdmin, divAdmin)
desplegar(navbarPerfil, divPerfil)
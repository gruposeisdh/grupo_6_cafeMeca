let addOne = document.querySelector("#addOne")
let removeOne = document.querySelector("#removeOne")
let quantity = document.querySelector("#quantity")


let inicio = 0; //se inicializa una variable en 0

function aumentar () {
    quantity.value = ++inicio;
}

function disminuir () { // se crean la funcion. // Se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    if (inicio > 0){
        quantity.value = --inicio;
    }
}

// ----------------------------------

addOne.addEventListener("click", () => {
    aumentar()
})

removeOne.addEventListener("click", () => {
    disminuir()
})
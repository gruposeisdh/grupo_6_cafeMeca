let ProductNew__addOne = document.querySelector("#ProductNew__addOne")
let ProductNew__removeOne = document.querySelector("#ProductNew__removeOne")
let ProductNew__valueAmount = document.querySelector("#ProductNew__valueAmount")


let inicio = 0; //se inicializa una variable en 0

function aumentar () {
    ProductNew__valueAmount.value = ++inicio;
}

function disminuir () { // se crean la funcion. // Se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    if (inicio > 0){
        ProductNew__valueAmount.value = --inicio;
    }
}

// ----------------------------------

ProductNew__addOne.addEventListener("click", () => {
    aumentar()
})

ProductNew__removeOne.addEventListener("click", () => {
    disminuir()
})


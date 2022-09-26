/* Estilos: 
.createProduct__inputBox-isInvalid : Hace que la linea del input sea ROJA y de 2px
.createProduct__errorValidation : Es el texto que esta mal, la clase es en todas las mismas.
.createProduct__errorValidationActive : Si hay un error en la validacion agrega el texto. */

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    nameProduct: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    descriptionProduct: /^[a-zA-Z0-9\_\-]{16,100}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
    price: /^\d{1,5}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// Tomamos el Formulario completo para poder manipularlo.
const formulario = document.getElementById("formProductCreate");

// Vamos a crear un selector para cada input
const nameProduct = document.getElementById("nameProduct");
const weightProduct1 = document.getElementById("weightProduct1");
const priceProduct1 = document.getElementById("priceProduct1");
const weightProduct2 = document.getElementById("weightProduct2");
const priceProduct2 = document.getElementById("priceProduct2");
const weightProduct3 = document.getElementById("weightProduct3");
const priceProduct3 = document.getElementById("priceProduct3");
const imageProduct = document.getElementById("imageProduct");
const descriptionProduct = document.getElementById("descriptionProduct");

// Solo aca debere usar querySelectorAll porque debo seleccionar todos los checkboxs que tienen como nombre idCategories
const idCategoriesDiv = document.getElementById("idCategoriesDiv");
const idCategoriesNew = document.querySelectorAll("input[type=checkbox][name=idCategories]");
let enabledIdCategories = []

// Crearemos un array con esos inputs
const inputsArray = [nameProduct, weightProduct1, priceProduct1, weightProduct2, priceProduct2, weightProduct3, priceProduct3, imageProduct, descriptionProduct]

// Fin de las Pruebas


const validarFormulario = (e) => {
    
    // Vamos primeramente a comprobar que se ejecute la funcion SOLO en el input donde estamos parados.
    // Eso lo podemos realizar con el target del elemento, y ahi encontrar su name.
    // Luego creamos casos para cada uno de esos names.
    // Luego en cada caso creamos un if para comprobar la expresion regular que usemos con .test
    // Dentro de test llamamos a e.target.value quien nos permite acceder al valor que estamos escribiendo.

    switch (e.target.name) {

        case "nameProduct" :
            validarCampo(expresiones.nameProduct, e.target, "nameProduct");
        break;

        case "priceProduct1" :
            validarCampo(expresiones.price, e.target, "priceProduct1");
        break;

        case "priceProduct2" :
            validarCampo(expresiones.price, e.target, "priceProduct2");
        break;

        case "priceProduct3" :
            validarCampo(expresiones.price, e.target, "priceProduct3");
        break;

        case "descriptionProduct" :
            validarCampo(expresiones.descriptionProduct, e.target, "descriptionProduct");
        break;
        
    }

} 

// ` Esta funcion es la encargada de Validar el campo y cambiar los estilos de cada uno de ellos
// expresion : 
// input: e.target.name
// campo: 

const validarCampo = (expresion, input, campo) => {

    if(expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.remove("createProduct__inputBox-isInvalid")
        document.getElementById(`${campo}`).classList.add("createProduct__inputBox-isValid")
        document.querySelector(`#createProduct__${campo} .createProduct__errorValidation`).classList.remove("createProduct__errorValidationActive")
    } else {
        document.getElementById(`${campo}`).classList.add("createProduct__inputBox-isInvalid")
        document.getElementById(`${campo}`).classList.remove("createProduct__inputBox-isValid")
        document.querySelector(`#createProduct__${campo} .createProduct__errorValidation`).classList.add("createProduct__errorValidationActive")
    }

}



// Ejecutamos un evento por cada input recorrido
inputsArray.forEach( input => {

    // Esto lo que hace es ejecutar una funcion en varios eventos, los monitorea.
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);

})



// Vamos a quitar primeramente el envio.
formulario.addEventListener("submit", (e) => {

    console.log("Hola")
    e.preventDefault();

})
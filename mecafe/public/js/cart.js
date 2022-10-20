function minusValue(id){
    let input = document.querySelector('#item_' + id + ' input[type="number"]');
    if(input.value != 0){
        input.value = parseInt(input.value) - 1;
    }
}

function moreValue(id){
    let input = document.querySelector('#item_' + id + ' input[type="number"]');
    input.value = parseInt(input.value) + 1;
}

/* Pagina Checkout  */

let tableDetails = document.querySelector(".checkout__table")
let buttonTableHidden = document.getElementById("checkout__tableHidden")

buttonTableHidden.addEventListener ("click", () => {
    
    tableDetails.classList.toggle("checkout__table")

})

let dataDirectionBtn = document.getElementById("dataDirection-btn")
let directionHidden = document.getElementById("dataDirectionContainer")

dataDirectionBtn.addEventListener ("click", () => {
    directionHidden.classList.toggle("dataDirectionHidden")
})
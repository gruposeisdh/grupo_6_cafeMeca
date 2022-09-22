function addDirection(){
    toggles();
}

function cancelDirection(){
    toggles();
}

function toggles(){
    let button = document.querySelector(".btnAddDirection");
    button.classList.toggle("display-none");

    let directions = document.querySelector(".list_directions");
    directions.classList.toggle("display-none");
    console.log(directions);

    let formDirection = document.querySelector(".form-direction");
    formDirection.classList.toggle("display-none");
}
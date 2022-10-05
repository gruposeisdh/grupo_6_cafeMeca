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
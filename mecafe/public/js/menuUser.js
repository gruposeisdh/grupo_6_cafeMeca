//obtiene ruta de pagina actual
function getRoute(){
    return window.location.pathname;
}

function selectMenuUser(){
    //obtener ruta de pagina
    let route = getRoute();
    //obtener li a que tenga la ruta
    let listLi = document.querySelectorAll('#menu_user li');
    //recorrer los 'li' buscando el que tenga a con href igual a la ruta de pagina actual
    listLi.forEach((item) => {
        let href = item.querySelector('a').getAttribute('href');
        if(href === route){
            item.classList.add('selected_menu_user_item');
        }else{
            item.classList.remove('selected_menu_user_item');
        }

    })

}

//ejecutar estas funciones al cargar pagina
window.onload = function() {
    selectMenuUser();   
};
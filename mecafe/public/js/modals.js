const idModals = ['modalLogin','modalPassword'];

function openModal(id){
    let modal = document.getElementById(id);
    modal.style.display = "initial" ; 
    openCloseSideChangeVisibility();
}

function closeModal(id){
    let modal = document.getElementById(id);
    modal.style.display = "none" ;
    openCloseSideChangeVisibility();
}

function openCloseSideChangeVisibility(){
    let openCloseSide = document.getElementById("openCloseSide");    
    let visibility = getComputedStyle(openCloseSide).visibility;
    
    openCloseSide.style.visibility = visibility == "hidden" ? "visible" : "hidden";
}

//valida si se debe abrir login al haber errores de validacion
function validateOpenLoginErrors(){
    let login = document.getElementById('modalLogin');
    
    if(login.getAttribute('active') != null){
        openModal('modalLogin');
    }
}

//obtiene ruta de pagina actual
function getRoute(){
    return window.location.pathname;
}

//inserta en iput oculto de login (para que redireccione correctamente)
function insertRouteInputLogin(){
    let url = getRoute();
    document.getElementById("inputRouteLogin").value = url;
}

let checkModalToClose = () => {
    idModals.forEach(function(idModal){
        let modal = document.getElementById(idModal);

        if (modal.style.display == "initial") {
            closeModal(idModal);  
        }
    });    
}

//ejecutar estas funciones al cargar pagina
window.onload = function() {
    validateOpenLoginErrors();
    insertRouteInputLogin();

    /** cerrar modal si se hace click fuera de ella */
    let openCloseSide = document.getElementById("openCloseSide");    
    openCloseSide.addEventListener('click', checkModalToClose);   
};
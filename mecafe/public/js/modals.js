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

/** cerrar modal si se hace click fuera de ella */
window.addEventListener('click', function(e) {
    idModals.forEach(function(idModal){
        let modal = document.getElementById(idModal);
        let openCloseSide = document.getElementsByClassName("open-close-side")[0];

        if (modal.style.display == "initial"  && openCloseSide.contains(e.target)) {
            closeModal(idModal);  
        }
    });    
})

function openCloseSideChangeVisibility(){
    let openCloseSide = document.getElementsByClassName("open-close-side")[0];
    
    if(getComputedStyle(openCloseSide).visibility == "hidden"){
        openCloseSide.style.visibility = "visible";
    }else{
        openCloseSide.style.visibility = "hidden";
    }
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

//ejecutar estas funciones al cargar pagina
window.onload = function() {
    validateOpenLoginErrors();
    insertRouteInputLogin();
};
function openModalLogin(){
    /**
     * al abrir modal, opacar todos menos la modal
     * opacity = "0.5"
     */
    let modal = document.getElementById("modalLogin");
    modal.style.display = "initial" ; 
}

function closeModalLogin(){
    let modal = document.getElementById("modalLogin");
    modal.style.display = "none" ;
}

/** cerrar modal si se hace click fuera de ella */
window.addEventListener('click', function(e) {
    if (document.getElementById('modalLogin').contains(e.target) || document.getElementById('btnOpenModalLogin').contains(e.target)) {
        console.log(e.target);
    } else {
        closeModalLogin();
    }
})
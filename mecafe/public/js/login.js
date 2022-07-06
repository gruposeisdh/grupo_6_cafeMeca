function openModalLogin(){
    let modal = document.getElementById("modalLogin");
    modal.style.display = "initial" ; 

    wdCloseSideChangeVisibility();
}

function closeModalLogin(){
    let modal = document.getElementById("modalLogin");
    modal.style.display = "none" ;
    wdCloseSideChangeVisibility();
}

/** cerrar modal si se hace click fuera de ella */
window.addEventListener('click', function(e) {
    let modal = document.getElementById("modalLogin");
    if (!modal.contains(e.target) && !document.getElementById('btnOpenModalLogin').contains(e.target) && modal.style.display == "initial") {
        closeModalLogin();
    }
})

function wdCloseSideChangeVisibility(){
    let wdCloseSide = document.getElementsByClassName("login-open-close-side")[0];
    
    if(getComputedStyle(wdCloseSide).visibility == "hidden"){
        wdCloseSide.style.visibility = "visible";
    }else{
        wdCloseSide.style.visibility = "hidden";
    }
}
function openModalLogin(){
    let modal = document.getElementById("modalLogin");
    modal.style.display = "initial" ; 

    loginOpenCloseSideChangeVisibility();
}

function closeModalLogin(){
    let modal = document.getElementById("modalLogin");
    modal.style.display = "none" ;
    loginOpenCloseSideChangeVisibility();
}

/** cerrar modal si se hace click fuera de ella */
window.addEventListener('click', function(e) {
    let modal = document.getElementById("modalLogin");
    if (!modal.contains(e.target) && !document.getElementById('btnOpenModalLogin').contains(e.target) && modal.style.display == "initial") {
        closeModalLogin();
    }
})

function loginOpenCloseSideChangeVisibility(){
    let loginOpenCloseSide = document.getElementsByClassName("login-open-close-side")[0];
    
    if(getComputedStyle(loginOpenCloseSide).visibility == "hidden"){
        loginOpenCloseSide.style.visibility = "visible";
    }else{
        loginOpenCloseSide.style.visibility = "hidden";
    }
}
let nombre = document.querySelector("#nombre");
let correo = document.querySelector("#correo");
let pass = document.getElementById("password");
let form = document.getElementById("form");
let error = document.querySelector("#error");


form.addEventListener("submit",e=>{
    e.preventDefault()
    let mensaje_error = document.createElement("p")
    error.appendChild(mensaje_error)
    
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    /* Validación nombre */
    if(nombre.value.length <4){
        nombre.style.border="1px solid red"

    } else{
        nombre.style.border="none"
    }
    
    /* Validación correo */
    if(!email.test(correo.value)){
        correo.style.border="1px solid red"

    } else{
        correo.style.border="none"
    }
    /* Validación contraseña */
    if(pass.value.length < 8){
        pass.style.border="1px solid red"

    } else{
        pass.style.border="none"
    } 
    
})
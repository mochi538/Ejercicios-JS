let nombre = document.querySelector("#nombre");
let correo = document.querySelector("#correo");
let pass = document.getElementById("password");
let error = document.querySelector("#error");
let form = document.getElementById("form")
let mensaje_error = document.createElement("p")

form.addEventListener("submit",e=>{
    e.preventDefault()
    error.appendChild(mensaje_error)

    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    /* Validación nombre */
    if(nombre.value.length <4){
        mensaje_error.textContent="Nombre inválido"
        nombre.style.border="1px solid red"
    } else{
        mensaje_error.textContent=""
        nombre.style.border="none"
    }
    
    /* Validación correo */
    if(!email.test(correo.value)){
        mensaje_error.innerText="Correo inválida"
        correo.style.border="1px solid red"
    } else{
        mensaje_error.innerText=""
        correo.style.border="none"
    }
    
    /* Validación contraseña */
    if(pass.value.length < 8){
        alert("Contraseña inválida")
        pass.style.border="1px solid red"
    } else{
        mensaje_error.innerText=""
        pass.style.border="none"
    } 
    
})
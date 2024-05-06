let num1 = parseInt(document.querySelector("#num1"));
let num2 = parseInt(document.querySelector("#num2"));

let boton = document.querySelector("#suma")
boton.addEventListener('click',()=>{
    res= num1 + num2
    document.write(`${res} es la suma de los dos números`)
}) 
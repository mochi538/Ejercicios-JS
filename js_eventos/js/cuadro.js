/* Se capturó el section con Id cuadrado y se le otorgaron estilos */
let cuadro = document.querySelector('#cuadro');
console.log(cuadro);
cuadro.style.cssText = 'background-color: white; border: 1px solid black; width: 40%; height: 100px ;text-align: center;'

/* Botón para dar el color rojo */
let rojo = document.querySelector('#red');
console.log(rojo)
rojo.addEventListener('click',()=>{
    cuadro.style.background= "red";
}
)

/* Botón para dar el color naranja */
let naranja = document.querySelector('#orange');
console.log(naranja)
naranja.addEventListener('click',()=>{
    cuadro.style.background= "orange";
}
)

/* Botón para dar el color amarillo */
let amarillo = document.querySelector('#yellow');
console.log(amarillo)
amarillo.addEventListener('click',()=>{
    cuadro.style.background= "yellow";
}
)

/* Botón para dar el color Verde */
let verde = document.querySelector('#green');
console.log(verde)
verde.addEventListener('click',()=>{
    cuadro.style.background= "greenyellow";
}
)

/* Botón para dar el color Azul */
let azul = document.querySelector('#blue');
console.log(azul)
azul.addEventListener('click',()=>{
    cuadro.style.background= "blue";
}
)

/* Botón para dar el color Cyan */
let cyan = document.querySelector('#cyan');
console.log(cyan)
cyan.addEventListener('click',()=>{
    cuadro.style.background= "aqua";
}
)

/* Botón para dar el color Cyan */
let violeta = document.querySelector('#violet');
console.log(violeta)
violeta.addEventListener('click',()=>{
    cuadro.style.background= "blueviolet";
}
)
/* Botón para dar el color Cyan */
let video = document.querySelector('#video');
console.log(video)
video.addEventListener('click',()=>{
    cuadro.style.background= "";
}
)


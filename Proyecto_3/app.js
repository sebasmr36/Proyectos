const boton = document.getElementById('boton-color');
const parrafo = document.getElementById('color');
const cabeza = document.querySelector(".encabezado");




function tocarBoton(){
    const letras = '0123456789ABCDEF'
    let color = "#";       
    
    for (let i = 0; i < 6; i++){
        let random = Math.random() 
        let ialeatorio = Math.floor(random * 16)
        color += letras[ialeatorio]
    }
    parrafo.innerText = color;
    document.body.style.backgroundColor = color;
    cabeza.style.backgroundColor = color
}


boton.addEventListener ('click' , tocarBoton);
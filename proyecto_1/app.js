const titulo = document.getElementsByClassName('titulo');
titulo[0].textContent = 'Cartas Pokemon Modificadas';


const nombres = ['Umbreon', 'Bulbasaur', 'Jolteon', 'Diglett', 'Mew', 'Pikachu'];
const cartas = document.getElementsByClassName('carta');

for(let i = 0; i < cartas.length; i++) {
    const h1 = cartas[i].querySelector('h1')
    h1.textContent = nombres[i];
}


// Esto es en caso de querer agregar otra carta
nombres.push('Charizard');
console.log(nombres);
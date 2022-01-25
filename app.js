let taille = document.querySelector('#taille');
let poids = document.querySelector('#poids');

let button = document.querySelector('button');
let h2 = document.querySelector('h2');

const processIMC = () => {
  let imc = parseFloat(poids.value) / Math.pow(taille.value, 2);
  imc = imc.toFixed(2);
  h2.innerHTML = `Votre IMC et de: ${imc}`;
};

button.onclick = processIMC;

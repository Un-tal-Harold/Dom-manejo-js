const ap = document.getElementById('titulo');

//cambio de href por otro en js
const p = document.getElementsByTagName('a');
//console.log(p[0].setAttribute('href','localhost36'));

//crear una etiqueta de html con css
const list = document.querySelector('.lista-toppings');
//('lista-toppings');
const nuevaetiqueta = document.createElement('li');
nuevaetiqueta.classList.add('topping','fondo-marron');
nuevaetiqueta.innerText= 'Queso extra';
//  list.append(nuevaetiqueta);

//interacion
const toppin = document.getElementsByClassName('topping');
function mostrarClic(e){
    console.log(e.target.innerText);
}; 
//me trae todo lo que hay en cada topping y muestra uno por uno
for(const topping of toppin){
    topping.addEventListener('click',mostrarClic);
}
//toppin.addEventListener('click',mostrarClic);


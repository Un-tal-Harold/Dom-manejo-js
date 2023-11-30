const inputrojo = document.getElementById('rojo');
const inputverde = document.getElementById('verde');
const inputazul = document.getElementById('azul');

const textorojo = document.getElementById('texto-rojo');
const textoverde = document.getElementById('texto-verde');
const textoazul = document.getElementById('texto-azul');
let rojo=inputrojo.value, verde=inputverde.value, azul=inputazul.value

textorojo.innerText=rojo;
textoverde.innerText=verde;
textoazul.innerText=azul; 

//actulizar el red
inputrojo.addEventListener('change',(e)=>{
    rojo= e.target.value;
    textorojo.innerText=rojo;
    actualizar(rojo,verde,azul);
});

inputverde.addEventListener('change',(e)=>{
    verde= inputverde.value;
    textoverde.innerText=verde;
    actualizar(rojo,verde,azul);
});

inputazul.addEventListener('change',(e)=>{
    azul= e.target.value;
    textoazul.innerText=azul;
    actualizar(rojo,verde,azul);
});

function actualizar(rojo,verde,azul){
    const colorRGB = `rgb(${rojo},${verde},${azul})`
    document.body.style.backgroundColor=colorRGB;
};
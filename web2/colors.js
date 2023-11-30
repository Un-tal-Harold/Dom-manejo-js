const boton = document.querySelector('button');
const color = document.getElementById('color');
const cuerpo = document.querySelector('body');

function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
    console.log(generarLetra());
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}

boton.addEventListener('click',function(){
    let colorAleatorio = colorHEX();
    console.log(colorAleatorio);
    boton.style.backgroundColor = colorAleatorio;

    color.textContent = colorAleatorio;
    cuerpo.style.backgroundColor= colorAleatorio;
});
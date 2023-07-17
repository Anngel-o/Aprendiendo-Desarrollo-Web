var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");//el lienzo se hará en 2 dimensiones
var ancho = d.width;
var yi, xf;

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

function dibuarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();//Arrancar o preparar un trazo
  lienzo.strokeStyle = color;//color de la línea
  lienzo.moveTo(xinicial, yinicial);//mover el trazo a un punto inicial
  lienzo.lineTo(xfinal, yfinal);//Trazar una línea a un punto
  lienzo.stroke();//se cierra la línea
  lienzo.closePath();//se cierra el trazo; como levantar el lapiz
}

function dibujoPorClick()
{

  var l = 0;
  var lineas = parseInt(texto.value);// value nos permite manejar utilizar el valor dentro de la caja de texto
  var espacio = ancho / lineas;
  //for(l = 0; l < lineas; l++); //También puede hacerse así
  while(l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibuarLinea("red", 0, yi, xf, 300);
    dibuarLinea("red", 300, yi, xf, 0);
    console.log("Linea " + l);
    l += 1;
  }

  dibuarLinea("red", 1, 1, 1, 300);
  dibuarLinea("red", 1, 299, 299, 299);
}

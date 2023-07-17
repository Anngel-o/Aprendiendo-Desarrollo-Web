var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}; //variable con variables adentro, json
var cuadro = document.getElementById("area_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

document.addEventListener("keyup", dibujarTeclado);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();//Arrancar o preparar un trazo
  lienzo.strokeStyle = color;//color de la línea
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);//mover el trazo a un punto inicial
  lienzo.lineTo(xfinal, yfinal);//Trazar una línea a un punto
  lienzo.stroke();//se cierra la línea
  lienzo.closePath();//se cierra el trazo; como levantar el lapiz
}
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);//generamos un puntito para empezar a dibujar
function dibujarTeclado(evento){
  var colorcito = "blue";
  var movimiento = 10;// se movera 10 pixels cada vez
  switch (evento.keyCode){
      case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
  }

  /*if (evento.keyCode == teclas.UP)
  {
    console.log("arriba");
  }*/ // También puede hacerse con if's

}

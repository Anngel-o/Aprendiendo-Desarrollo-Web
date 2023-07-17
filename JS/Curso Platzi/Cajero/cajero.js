class Billete{
  constructor(v, c){
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero(){
  var texto = document.getElementById("dinero");
  dinero = parseInt(texto.value);

  for(var bille of caja){

    if (dinero > 0){
      div = Math.floor(dinero / bille.valor);
      let string = "Hola cosa ";

      if (div > bille.cantidad){
        papeles = bille.cantidad;
      } else{
        papeles = div;
      }

      entregado.push(new Billete(bille.valor, papeles) );
      dinero -= (bille.valor * papeles);
    }

  }

  if (dinero > 0){
    resultado.innerHTML = "Cantidad no aceptada, intente de nuevo";
  } else{
      for (var e of entregado){
        if(e.cantidad > 0){
          resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
        }
      }
   }
}

var caja = [];
var entregado = [];
caja.push(new Billete(100, 10) );
caja.push(new Billete(50, 10) );
caja.push(new Billete(20, 30) );
caja.push(new Billete(10, 10) );
caja.push(new Billete(5, 10) );

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

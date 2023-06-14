var p = false;
var q = false;
var r = true;
if ((!p || r) && (q || (!r && (r || !q)))) {
    console.log("verdadero");
}
else {
    console.log("falso");
}

//Hacer un programa que diga si una persona es mayor de edad o no
var calc = Math.random() * 45;
var edad = Math.ceil(calc);
console.log("Tu edad es de " + edad + " años");
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");
}
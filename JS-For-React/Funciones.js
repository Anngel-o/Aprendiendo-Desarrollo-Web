function hello() {
    return function hello2() {
        return "Hola ";
    }
}
//Una función puede retornar otra función
document.write(hello()());

//Parámetros por defecto
function add(x = 0, y = 0) {
    return x + y;
}
document.write(add(20));
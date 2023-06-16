function hello() {
    return function hello2() {
        return "Hola"; //return finaliza el proceso en una función
    }
}
//Una función puede retornar otra función
document.write(hello()());

//Parámetros por defecto
function add(x = 0, y = 0) {
    return x + y;
}
document.write(add(20));

//Arrow Functions
const add = (x, y) => {
    return x + y;
}

//Inline Arrow Functions
const showText = () => "Hola mundo";
const showArray = () => [1, 2, 3];
const showObject = () => ({name: "Anngel"});
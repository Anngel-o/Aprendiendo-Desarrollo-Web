//Hacer un menú de 3 platillos y escoger uno
console.log("Bienvenido a Mariam restaurant, ¿Que desea escoger hoy?");
console.log("MENU");
console.log("1. Mole");
console.log("2. Pollo en crema");
console.log("3. Burrito");
var calc = (Math.random() * 3);
var decision = Math.ceil(calc);
console.log("Usted escogió " + decision);

switch (decision) {
    case 1:
        console.log("Haré que su mole sea exquisito");
        break;
    case 2:
        console.log("Haré que su pollo en crema sea exquisito");
        break;
    case 3:
        console.log("Haré que su burrito sea exquisito");
        break;

    default:
        break;
}

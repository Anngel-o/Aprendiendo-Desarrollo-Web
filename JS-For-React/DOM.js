//DOM Document Object Model
const title = document.createElement("h2");
const button = document.createElement("button");
const p = document.createElement("p");

title.innerText = "Texto agregado con Javascript";
button.innerText = "Click me";
p.innerText = "Evento del botón";


//Event Handlers o Manejadores de Eventos
button.addEventListener("click",function() {
    document.body.append(p);
});
//append agrega elementos creados con javascript
document.body.append(title);
document.body.append(button);

const user = {
    name: "Anngel"
}

function printInfo(u) {
    return '<h1> Hola ' + u.name + '</h1>';
    //También se podría u['name']
}
//innerHTML agrega elementos con formato string formato html
document.body.innerHTML = printInfo(user);
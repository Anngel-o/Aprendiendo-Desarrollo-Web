const user = {
    name: "Anngel"
}

function printInfo({name}) { //Destructuring: desestrucutrar un objeto para obtener un atributo o elemento
    return '<h1> Hola ' + name + '</h1>';
    //También u['name'] o u.name
}
//innerHTML agrega elementos con formato string formato html
document.body.innerHTML = printInfo(user);


//DOM Document Object Model
const title = document.createElement("h2");
const button = document.createElement("button");
const p = document.createElement("p");

title.innerText = "Texto agregado con Javascript";
button.innerText = "Click me";
p.innerText = "Evento del botón";


//Event Handlers o Manejadores de Eventos
button.addEventListener("click", () => {
    document.body.append(p);
});
//append agrega elementos creados con javascript
document.body.append(title);
document.body.append(button);

//String Literals Interpolación
const isAuthorized = true;
const background = "red";
const color = "white";
button.style = `background-color: ${isAuthorized ? 'blue' : 'red'}; color: ${color}`;
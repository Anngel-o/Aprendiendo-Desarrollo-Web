const ul = document.createElement('ul');

//fetch es una biblioteca del navegador que permite realizar peticiones a una URL 
//Mostrar API usando promesas
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//         return response.json()
//         //response nos devuelve y un objeto en respuesta de una petición a la API, debemos convertirlo a json para porder leerlo, se retorna el valor
//     }).then(function (data) {
//         //Con otro then recibimos un parámetro de resuesta y podemos mostrar los datos extraidos de la API
//         console.log(data);
//         data.forEach(element => {
//             //En cada recorrido se va creando un elemento para mostrar los datos de la API en el document de html
//             const li = document.createElement('li');
//             li.innerText = element.title;
//             ul.append(li);
//         })
//         document.body.append(ul);
//     }) 



//Mostrar API usando await
async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    data.forEach(element => {
        //En cada recorrido se va creando un elemento para mostrar los datos de la API en el document de html
        const li = document.createElement('li');
        li.innerText = element.title;
        ul.append(li);
    })
    document.body.append(ul);
}

loadData();

console.log("línea 2");
//El código asíncrono permite ejecutar código mientras ya se está ejecutando otro código o lógica en el programa, de esta manera mientras javascript ejecuta fetch para obtener respuestas de la API, ejecuta la línea 2, así termina primero con la línea 2 y después con la funcion del then


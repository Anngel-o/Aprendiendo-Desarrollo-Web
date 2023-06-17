//fetch es una biblioteca del navegador que permite realizar peticiones a una URL 
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function response () {
        console.log(response);
    })

console.log("línea 2");
//El código asíncrono permite ejecutar código mientras ya se está ejecutando otro código o lógica en el programa, de esta manera mientras javascript ejecuta fetch para obtener respuestas de la API, ejecuta la línea 2, así termina primero con la línea 2 y después con la funcion del then


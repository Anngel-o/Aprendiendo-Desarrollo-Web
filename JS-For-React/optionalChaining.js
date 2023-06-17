const person = {
    name: 'John',
    adress: {
        city: 'London',
    }
}

console.log(person.location?.city);
//? pregunta si existe ese valor, esto evtará errores en caso de no exisitir dicho parámetro
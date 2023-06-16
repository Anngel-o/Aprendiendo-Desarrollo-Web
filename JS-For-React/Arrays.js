const names = ["Anngel", "Mariam", "Nose"];

//for normal
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
}

//foreach
names.forEach(function (name) {
    console.log(name);
});

//.map
const newNames = names.map(function (name) {
    return "Hola " + name;
    //map genera un nuevo arreglo sin modificar el original
});
console.log(newNames);

// .find
const findNames = names.find(function (name) {
    if (name === "Anngel") {
        return name;
    }
    //find busca un elemento en un arreglo
});
console.log(findNames);

//.filter
const filterNames = names.filter(function (name) {
    if (name === "Anngel") {
        return name;
    }
    //filter crea un arreglo con sólo con los elementos que cumplan una condición sin modificar el arreglo original
});
console.log(filterNames);

//.concat
const otherNames = ["Mario", "Luis", "Jorge"];
console.log(names.concat(otherNames));
//concat concatena un arreglo con otro para formar uno sólo con elementos de ambos

//spread operator
console.log([...names, ...otherNames]);
//También sirve para concatenar arreglos en uno sólo con elementos de ambos
const user = {
    name: "Anngel",
}
const adress = {
    direction: "Hvrd",
}
const infoUser = {
    ...user,
    ...adress,
}
console.log(infoUser);
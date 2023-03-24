const username = "Silvio"
const lastname = "Salza"
const age = 37


//!in questo esempio js riconosce che la key = variabile e quindi crea oggetto con chiave lastname con valore della costante
const person = {
    name: username,
    lastname,
    age,
}

console.log(person);

const newKey = "professione"
const value = "developer"

//!se voglio aggiungere nuova key con nuovo valore

// 1° metodo
person[newKey] = value
console.log(person);

// 2° metodo
const person2 = {
    name: username,
    lastname,
    age,
    [newKey]: value
}
console.log(person2);


//!destrutturazione

const namesArray = ["Silvio", "Hector", "John"]
// const firstName = namesArray[0];
// const secondName = namesArray[1];
// const thirdName = namesArray[2];

//destrutturazione mi fa fare questa operazione in un colpo solo

const [firstName, secondName, thirdName] = namesArray;
console.log(firstName, thirdName);

const student = {
    name: "Silvio",
    età: "33",
    email: "silvio@gmail.com",
}
//questa sugar syntax funziona solo se il nome delle variabili è UGUALE al nome delle chiavi dell'oggetto
const {name, età, email} = student
console.log(name, age, email);



//! note su array
const names = ["Silvio", "Hector", "John"]
//voglio copiare array in un altra variabile
const copyArray = names
// questa operazione NON sto creando un nuovo array, ma creo un altra etichetta che punta sempre sulla stessa area di memoria
copyArray.push("Italo")
console.log(names);
console.log(copyArray);
//!spread operator [...] scompone array in pezzettini names e li mette dentro copyarray2
const copyArray2 = ["Moka", ...names, "Bolina"]

console.log(copyArray2);

//! rest operator (solo come argomento di una funzione)

const result = sumNumbers(2,5, 10, 23, 34)
console.log(result);
function sumNumbers(...numbers){
    console.log(numbers);
    let sum = 0
    numbers.forEach((num) => {sum += num})
    return sum;
}


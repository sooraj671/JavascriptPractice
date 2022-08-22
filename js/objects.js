let contact = {
    email : 'sooraj.bcss19@iba-suk.edu.pk',
    number : '03110138020'
}

let address = {
    'house no': 123,
    street : 'old'
}

let person = {
    firstname : 'sooraj',
    lastname : 'kumar',
    contact
}

console.log(person['firstname'])
console.log(person.contact)

person.age = 25;
console.log(person);
delete person.age;
console.log('age' in person);




let person2 = {
    firstname : 'sooraj',
    lastname : 'kumar',
    contact  : {
        number : '000000'
    }
}

console.log(person2.contact)

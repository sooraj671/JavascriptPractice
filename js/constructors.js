let person = {
    firstname : 'Sooraj',
    lastname : 'Kumar'
}


//with new
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function(){
        return this.firstName +' '+this.lastName;
    }
}

let p = new Person('Sooraj','Kumar');

console.log(p.getFullName())


//with new but an error
function Boy(firstname, lastName){
    
    if(!new.target){
        throw new Error('Please add new keyword');
    }
    
    this.firstName = firstname;
    this.lastName = lastName;

}

let b = new Boy('Ali', 'Arshad');
console.log(b.firstName);

function Girl(firstName, lastName){
    
    if(!new.target){
        return new Girl(firstName,lastName);
    }
    
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function(){
        return this.firstName +' '+this.lastName;
    }

}

let g = Girl('Nancy','Jordan');
console.log(g.getFullName()); 


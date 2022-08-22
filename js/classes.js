class person{

    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName(){
        return this.firstname +' '+this.lastname;
    }
}

let p = new person('Sooraj','Kumar');

console.log(p.getFullName());
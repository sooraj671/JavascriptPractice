function hello(){
    console.log('No Parameters');
}



function helloWithReturn(name){
    return;
    console.log('hello '+ name );
}
function hello(name){
    console.log('hello '+ name );
}


function add(){
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum+=arguments[index];
    }
    return sum;
}



let result = hello();
console.log('default return in function: '+result);


console.log('Function with one paramter:')
hello('sooraj');

console.log('Function with return to terminate immediately:')
helloWithReturn('sooraj');

console.log('Function using arguments keyword for 3 arguments')
let addition = add(1,2,3);
console.log(addition);

console.log('Function using arguments keyword for 5 arguments')
addition = add(1,2,3,4,5);
console.log(addition);


console.log('Practice for anonymous functions')
//An anonymous function is a function without a name. The following shows how to define an anonymous function:


let prac = function(){
    console.log('Anonymous function');
}


prac();

//anonymous function as an argument to another function
setTimeout(function(){
    console.log('Inside Timeout')
},1000);

setTimeout(function(){
    console.log('Inside another Timeout')
},100);

(function() {
    console.log('IIFE');
})();




let person = {
    firstName: 'John',
    lastName: 'Doe',
    age : 23
};


(function() {
    console.log(person.age);
})(person);

(function () {
    console.log(person.firstName);
})(person);

let arrow = () => {
    console.log('Arrow Function');
}
arrow();

let sum = (a,b) => {
    return a+b;
}

console.log(sum(5,7))
/*
This means that you can store functions in variables, pass them to other functions
as arguments, and return them from other functions as values.
*/

function add(a, b){
    return a+b;
}


//we are not using parentheses with 'add' because we are referencing it as a value not calling it.
let sum = add;

//passing function as an arg

function avg(a,b,sum){
    return sum(a,b)/(arguments.length-1);
}

console.log('results of sum: '+sum(2,3));
console.log('results of avg: '+avg(2,3,sum));

//return function as a value
let products = [
    {
        name : 'apple',
        price : 300
    },
    {
        name : 'banana',
        price : 100
    },

    {
        name : 'cat',
        price : 200
    },

]

function compareBY(property){
    return function(a,b){
        let x = a[property],
        y = b[property];

        if(x>y){
            return 1;
        }else if(x<y){
            return -1;
        }else{
            return 0;
        }

    };
}

console.log('Products sorted by name');
console.table(products.sort(compareBY('name')));

console.log('Products sorted by price');
console.table(products.sort(compareBY('price')))


//more about first citizens
//The following example defines two functions that convert a length in centimeters to inches and vice versa:


function cnToInch(length){
    return length/2.54;
}

function inchToCm(length){
    return length*2.54;
}

function calculate(length, fun){
    return fun(length);
}

let cal = calculate(5,cnToInch);
console.log('Centimeters to Inches: ' +cal);

cal = calculate(5, inchToCm);
console.log('Inches to Centemeters: '+cal);

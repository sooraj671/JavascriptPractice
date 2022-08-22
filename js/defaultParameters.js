console.log('Practice of Default Parameters');

function fun(message='Hello'){
    console.log(message);
}


fun();
fun(undefined);
fun('Sooraj');

function sum(a=10, b=10, c=10){
    return a+b+c;
}
console.log(sum())
console.log(sum(undefined,undefined,30))


console.log('Evaluating default parameters');

function put(toy, toyBox=[]){
    toyBox.push(toy);
    return toyBox;
}

console.log(put('car'))

console.log(put('bike'))

console.log('Argument is Required Practice')

function req(){
    throw new Error('Argument is required!');
}


function subtract(a = req(),b = req()){
    return a-b;
}

console.log(subtract(10,10));

function newFun(x=1, y=x){
    return x+y;
}

//initiallization error
function newFunError(x=y, y=1){
    return x+y;
}


// console.log(newFunError());

let total = () =>  10;

function avg(sum, a = total()){
    return sum/a;
}

console.log(avg(sum()));

//arguments keywords

function loop(){
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}

loop(1,2,3,4,5);
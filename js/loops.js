console.log('Printing Loop with all expressions');

for(let i = 0; i < 5 ; i++){
    console.log(i);
}

let index = 0

console.log('Printing Loop without initiallizer expressions');


for (; index < 5; index++) {
    console.log(index);
}

console.log('Printing Loop without conditional expressions');


for(let i = 0 ; ; i++){
    console.log(i);
    if(i==4){
        break;
    }
}

console.log('Printing Loop without any expressions');

let j = 0;
for(;;){
    console.log(j);
    j++;
    if(j==4){
        break;
    }
}
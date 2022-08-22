console.log('Printing nested for loop');

for (let index = 0; index < 5; index++) {

    console.log(index);

    for(let i = 5 ; i >= 0 ; i--){

    console.log(' '+i);
   

    }
}

console.log('Printing nested for loop & breaking inner loop');

for (let index = 0; index < 5; index++) {

    console.log(index);

    for(let i = 5 ; i >= 0 ; i--){

    console.log(' '+i);
    if(i==3){
        break;
    }
   

    }
}

console.log('Printing nested for loop & breaking outer loop');

for (let index = 0; index < 5; index++) {

    console.log(index);

    for(let i = 5 ; i >= 0 ; i--){

    console.log(' '+i);
   

    }
    if(index==2){
        break;
    }
}

console.log('Printing nested for loop & breaking outer loop inside inner loop using lables');

outer: for (let index = 0; index < 5; index++) {

    console.log(index);

    for(let i = 5 ; i >= 0 ; i--){

    console.log(' '+i);
    if(i==3){
        break outer;
    }
   

    }
}


console.log('Printing nested for loop & continuing outer loop inside inner loop using lables');

outer: for (let index = 0; index < 5; index++) {


    
    for(let i = 5 ; i >= 0 ; i--){

    if(i==3){
        continue outer;
    }
    console.log(index+' '+i);

   

    }
}
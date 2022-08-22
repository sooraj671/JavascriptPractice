//dense array
let colors = ['red','green','blue'];
console.log(colors.length);
//adding first element
console.log(colors.unshift('cool'));
//removing first element
console.log(colors.shift());
//removing last element
console.log(colors.pop());


console.log(colors.indexOf('blue'));
console.log(Array.isArray(colors));

//sparse array
colors = ['red',,'green','blue'];
console.log(colors.length);

console.log(colors);
colors.length = 1;
console.log(colors);
colors.push('yellow');
console.log(colors);
colors[100] = ['blac'];
console.log(colors.length)


//String operations

let name = 'kumar';
let message = `Hello ${name}`;
console.log(message);

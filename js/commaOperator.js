
console.log('Prining 3x3 Matrix by using comma operator');


let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let s = '';
for(let i = 0, j = 1; i< board.length; i++, j++){
    s += board[i]+ ' ';
    if(j%3 == 0){
        console.log(s);
        s = '';
    }
}
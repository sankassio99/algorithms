// Write a factorial recursive algorithm

function fat(x : number) : number{
    console.log(x);
    
    if(x <= 1){
        return 1;
    }else{
        return x * fat(x - 1);
    }
}

console.log(fat(3));
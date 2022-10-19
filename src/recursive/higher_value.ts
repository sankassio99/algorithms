// find the higher value in list
let arratList = [9,4,6,8];
let maior = arratList[0];

function higherValue(arr : Array<number>) : number {
    let current = arr.pop();
    
    if(current == undefined){
        return maior;
    }

    if(maior < current){
        maior = current;
    }

    return higherValue(arr);
}

console.log(higherValue(arratList));
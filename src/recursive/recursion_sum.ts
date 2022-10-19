// sum array numbers logic with recursion
// exercise of 77 page of Algothm book

function sum(arr : Array<number>) : number {
    console.log("current array: "+arr);
    if(arr.length == 1){
        return arr[0];
    }else{
        let last : number = arr.pop()!;
        return last + sum(arr);
    }
}


console.log(sum([2,4,6,8]));
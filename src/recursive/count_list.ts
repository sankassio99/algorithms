// Write a recursive function that return the array list length 

var count = 0;
function countLength(arr: Array<number>): number{
    
    let last = arr.pop();
    if(last == undefined){
        return count;
    }else{
        count ++;
        return countLength(arr);
    }
}
let randomArray = [1,4,6,2,8];
let nativeLength = randomArray.length;
let recursiveLength = countLength(randomArray);

console.log(
    recursiveLength, nativeLength
);
// ------------ test ------------------
let lengthArr = countLength(randomArray);
console.log("Test passed: " + (lengthArr == nativeLength));
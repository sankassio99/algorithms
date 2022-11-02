const arrayList: Array<number> = [3, 1, 2];

// [1] - pivo - [3]
// [1 , 2 , 3]

function quick_sort(arr: Array<number>): number[] {
    let arrayOrdened: Array<number> = [];
    let arrayLegth = arr.length;
    let pivo = arr.pop();
    let higher: Array<number> = [];
    let minos: Array<number> = [];


    if(pivo == undefined){
        return arrayOrdened;
    }

    if (arrayLegth <= 2) {
        if(arr[1] != undefined && pivo > arr[1]){
            arrayOrdened[0] = arr[1];
            arrayOrdened[1] = pivo;
        }else{
            arrayOrdened[0] = pivo;
            arrayOrdened[1] = arr[1];
        }
    } 
    if(arrayLegth > 2){
        for (const i of arr) {
            if (arr[i] >= pivo) {
                higher.push(arr[i]);
            } else if(arr[i] != undefined){
                minos.push(arr[i]);
            }
        }
    }


    arrayOrdened = quick_sort(minos);
    arrayOrdened.push(pivo);
    arrayOrdened.concat(quick_sort(higher));

    return arrayOrdened;
}

console.log(quick_sort(arrayList));

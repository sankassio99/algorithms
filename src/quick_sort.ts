const arrayList: Array<number> = [1, 2, 33, 31, 1, 2, 63, 123, 6, 32, 943, 346, 24];

function quick_sort(arr: Array<number>): number[] {
    var arrayOrdened: Array<number> = [];
    var arrayLeft: Array<number> = [];
    var arrayRight: Array<number> = [];

    if (arr.length < 2) {
        return arr;
    }

    if (arr.length == 2) {
        if (arr[0] > arr[1]) {
            arrayOrdened[0] = arr.pop()!;
            arrayOrdened[1] = arr.splice(0, 1)[0];
        } else {
            arrayOrdened[0] = arr.splice(0, 1)[0];
            arrayOrdened[1] = arr.pop()!;
        }
        return arrayOrdened;
    } else {
        var pivo = arr.pop()!;
        arr.forEach((element) => {
            if (element > pivo) {
                arrayRight.push(element);
            } else {
                arrayLeft.push(element);
            }
        });

        return quick_sort(arrayLeft).concat([pivo], quick_sort(arrayRight));
    }
}

console.log(quick_sort(arrayList));

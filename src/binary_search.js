// get position of a number in array
// log2 100 = 7
// O(log n)

const myArgs = process.argv.slice(2);
let argsNum = parseInt(myArgs[0]);

let array = [-1, 0, 3, 5, 9, 12];

function binary_search(list, num) {
    let down = 0;
    let high = list.length - 1;

    while (down <= high) {
        let middle = Math.round((down + high) / 2); // 2° 4 + 6 = 10 / 2 = 5
        let kick = list[middle];
        console.log("middle position: " + middle);

        if (kick == num) {
            return middle;
        }

        if (kick > num) {
            high = middle - 1;
        } else {
            down = middle + 1;
        }
    }

    return null;
}

console.log(binary_search(array, argsNum));

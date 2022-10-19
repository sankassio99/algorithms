// ordenação pro seleção:
// voce vai pegar o maior valor de uma lista
// e colocando em uma nova lista até que todos os valores esteja ordenados
// O(n x n)

let arr : Array<number> = [1, 3, 6, 9, 2, 4, 8, 0, -2];

function buscarMenor(arr : Array<number>) : number {
    let menor : number = arr[0];
    let indexMenor : number = 0;

    for (var i = 1; i < arr.length; i++) {
        if (menor > arr[i]) {
            menor = arr[i];
            indexMenor = i;
        }
    }

    arr.splice(indexMenor, 1);
    return menor;
}

function ordenacaoPorSelecao(arr: Array<number>) : number[] {
    let novoArray : Array<number> = [];
    let length = arr.length;

    for (var i = 0; i < length; i++) {
        let menor = buscarMenor(arr);
        novoArray.push(menor);
    }

    return novoArray;
}

console.log(arr);
console.log("--------------------------");
console.log(ordenacaoPorSelecao(arr));

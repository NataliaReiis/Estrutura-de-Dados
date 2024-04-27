function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let chave = arr[i]; // Elemento a ser inserido na lista ordenada
        let j = i - 1; // Índice do último elemento na lista ordenada

        // Deslocar elementos maiores que a chave para a direita
        while (j >= 0 && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Inserir a chave na posição correta na lista ordenada
        arr[j + 1] = chave;
    }

    return arr; // Array ordenado
}

// Exemplo de uso do Insertion Sort
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(array);
console.log("Array ordenado:", sortedArray);

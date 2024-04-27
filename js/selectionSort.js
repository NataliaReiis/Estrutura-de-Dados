function selectionSort(arr) {
    const n = arr.length;

    // Iterar sobre o array
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Índice do menor elemento inicialmente definido como o elemento atual

        // Encontrar o índice do menor elemento no restante do array não classificado
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Atualizar o índice do menor elemento encontrado
            }
        }

        // Trocar o menor elemento encontrado com o primeiro elemento não classificado
        if (minIndex !== i) {
            // Troca de elementos usando desestruturação
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Exemplo de uso
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", array);

const sortedArray = selectionSort(array.slice()); // Criar uma cópia do array original para não modificá-lo
console.log("Array ordenado:", sortedArray);

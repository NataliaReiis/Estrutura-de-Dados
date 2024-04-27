// Função para trocar elementos de posição em um array
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Função para encontrar o pivô e particionar o array em torno dele
function partition(arr, low, high) {
    // Escolher o elemento pivot (usaremos o último elemento neste exemplo)
    const pivot = arr[high];
    let i = low - 1; // Índice do menor elemento

    // Percorrer o subarray
    for (let j = low; j <= high - 1; j++) {
        // Se o elemento atual for menor ou igual ao pivot, incrementar o índice do menor elemento e trocar
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    // Trocar o pivot para o lugar correto
    swap(arr, i + 1, high);
    return i + 1; // Retornar o índice do pivot após a partição
}

// Função principal do Quick Sort
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Encontrar o índice do pivot após a partição
        const pi = partition(arr, low, high);

        // Recursivamente ordenar os elementos à esquerda e à direita do pivot
        quickSort(arr, low, pi - 1); // Ordenar elementos à esquerda do pivot
        quickSort(arr, pi + 1, high); // Ordenar elementos à direita do pivot
    }

    return arr;
}

// Exemplo de uso
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", array);

const sortedArray = quickSort(array.slice()); // Criar uma cópia do array original para não modificá-lo
console.log("Array ordenado:", sortedArray);

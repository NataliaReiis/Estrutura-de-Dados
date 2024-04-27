// Função para mesclar duas listas ordenadas
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Comparar elementos de ambas as listas e mesclar em ordem crescente
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Adicionar elementos restantes da lista esquerda (se houver)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Adicionar elementos restantes da lista direita (se houver)
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Função principal do Merge Sort
function mergeSort(arr) {
    // Caso base: se o array tem tamanho menor ou igual a 1, está ordenado
    if (arr.length <= 1) {
        return arr;
    }

    // Encontrar o índice médio do array
    const middle = Math.floor(arr.length / 2);

    // Dividir o array em duas partes
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursivamente aplicar o Merge Sort às duas partes divididas
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // Mesclar as partes ordenadas
    return merge(leftSorted, rightSorted);
}

// Exemplo de uso
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", array);

const sortedArray = mergeSort(array.slice()); // Criar uma cópia do array original para não modificá-lo
console.log("Array ordenado:", sortedArray);

function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let trocou = false;  // indicar se houve troca nesta iteração


        for (let j = 0; j < n - 1 - i; j++) {   // Comparar elementos adjacentes e trocar se estiverem fora de ordem

            if (arr[j] > arr[j + 1]) {
                // Trocar elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                trocou = true;
            }
        }

        if (!trocou) {  // Se nenhum elemento foi trocado, o array está ordenado
            break;
        }
    }

    return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", array);

const sortedArray = bubbleSort(array.slice()); // Criar uma cópia do array original para não modificá-lo
console.log("Array ordenado:", sortedArray);

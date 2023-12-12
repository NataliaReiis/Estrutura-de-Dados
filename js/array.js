
 var month = []

var lastWeeks = []
var fisrtWeeks = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 88.4]

var avgTempWeek3 = [34, 5.2, 9, 72, 31.4, 14.4, 27]
var avgTempWeek4 = [45, 28, 35, 23.2, 18.4, 14, 8]


fisrtWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [fisrtWeeks, lastWeeks]

for(var x = 0; x < month.length; x++){
    for(var y = 0; y < month[x].length; y++){
        for(var z = 0; z < month[x][y].length; z++)
        console.log(month[x][y][z])
    }
}

/* var avgTempWeek = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 88.4]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

for(var i = 0; i < avgTempWeek.length; i++){
    for(var j = 0; j < avgTempWeek[i].length; j++){
        console.log(avgTempWeek[i][j])
    }
} */


/* var numbers = [ 1,2, 3,4, 5,6, 7, 8, 9]

numbers.unshift(0) --> adiciona no inicio do array
numbers.push(10) --> adiciona no fim do array
numbers.pop() --> remove no fim do arrray
numbers.shift() --> remove no inicio do array
numbers.splice(3, 3) --> a partir da posição 3 vai remover os prox 3 elementos
numbers.splice(3, 0, 3,4,5) --> o 0 pq nao quer remover e em seguida os q quer adicionar
console.log(numbers) */




/* var fibonacci = []
fibonacci[0] = 1
fibonacci[1] = 2
fibonacci[2] = 3

for(var i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
for(var i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i])
}
 */
/* var dayOfWeek = new Array("Seg", "ter", "qua", "qui", "sex", "sab", "dom");
console.log(dayOfWeek.length); */

/* var avgTemp = []

avgTemp[0] =  31.9
avgTemp[1] =  35.3
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 25.5

console.log(avgTemp[2]) */

/* var avgTempJan = 31.9
var avgTempFeb = 35.3
var avgTempMar = 42
var avgTempApr = 38
var avgTempMay = 25.5

console.log(avgTempJan) */

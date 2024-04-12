class Filas {
    constructor() {
        var items = []

        this.add = function(element) {
            items.push(element)

        }

        this.remove = function() {
            return items.shift()

        }
        this.frontItem = function() {
            return items[0]

        }

        this.Empety = function() {
            return items.length === 0
        }

        this.size = function() {
            return items.length
        }

        this.print = function() {
            console.log(items.toString())
        }
    }
}

function hotPotato(nameList, num) {
   var queue = new Filas()
    
    for(var i = 0; i < nameList.lenght; i++) {
        queue.add(nameList[i])
    }

    var eliminated = ''

    while(queue.size() > 1){
        for(var i = 0; i < num; i++) {
            queue.add(queue.remove())
        }
        eliminated = queue.remove()
        print(` ${eliminated} + 'Foi eliminado do jogo da batata quente'`)
    }

    return queue.remove()
}

var names = ['Maria', 'Antonio', 'Ada', 'Tom', 'Alguem']
var winner = hotPotato(names, 7)
console.log('O ganhador é: ' + winner)

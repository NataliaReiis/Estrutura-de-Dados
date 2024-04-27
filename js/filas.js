/* Coleçao ordenada de items que segue o principio FIFO , ou seja o primeiro a entrar é o primeiro a sair */

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

/* var primeirafila = new Filas()

primeirafila.add('Natalia')
primeirafila.add('Oliveira')
primeirafila.add('Reis')
primeirafila.print() */


function ListPriority() {
        var items = []

        function OrganizationList(element, priority) {
            this.element = element
            this.priority = priority
        }

        this.add = function (element, priority) {
            var addElement = new OrganizationList(element, priority)
            var added = false

            for(let i = 0; i < items.length; i++){
                if(addElement.priority < items[i].priority){
                    items.splice(i, 0, addElement)
                    added = true
                    break
                }
            }
            if(!added) {
                items.push(addElement)
            }
        }
        this.remove = function() {
            return items.shift()
        }

        this.print = function() {
            for(var i = 0; i < items.length; i++){
                console.log(items[i].element + ' ' + items[i].priority)
            }
        }
   
}

var pqueue = new  ListPriority()
pqueue.add('Pietro', 3)
pqueue.add('Bira', 1)
pqueue.add('eu', 2)
pqueue.print()
/*A pilha segue o modelo LIFO (last in, first out), primeiro elemento a entrar ultimo a sair */
function Stack(){

    var items = []

    this.push = function(element) { //adiciona novo item na pilha
       items.push(element)
    }
    this.pop = function() { //remove o item do topo da pilha
        return items.pop()
    }
    
    this.peek = function() { // devolve o elemento que esta no topo da pilha
        return items[items.lenght - 1]
    }

    this.isEmpty = function() { // Informa se a pilha esta vazia ou n
        return items.lenght === 0
    }
    
    this.clear = function(){ //limpa a pilha
      items = []
    }
    
    this.size = function(){ // verifica o tamanho da pilha
       return items.length
    }

    this.print = function(){ //imprime a pilha no console
       console.log(items.toString())
    }
}

var pilha = new Stack()

pilha.push(2)
pilha.push(4)
pilha.push(6)
pilha.push(8)
pilha.push(10)

pilha.print()

console.log(pilha.pop())


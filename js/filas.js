/* Coleçao ordenada de items que segue o principio FIFO , ou seja o primeiro a entrar é o primeiro a sair */

function Filas(){
    var items = []

    this.add = function(element){
        items.push(element)

    }

    this.remove = function(){
      return items.shift()

    }
    this.frontItem = function(){

    }

    this.Empety = function(){

    }

    this.size = function(){

    }
    
    this.print = function(){
        console.log()
    }
}

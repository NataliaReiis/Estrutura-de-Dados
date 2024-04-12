/* Criar uma lista de hamburgueres com nome e valor e classificar pelo preço mais alto, posso adicionar algum ingrediente, e categoria */

class Hamburguer {
    constructor() {
       this.items = []
    }
       adicionar = function(element) {
        this.items.push(element)
        }

        remover = function() {
            return this.items.shift()
        }

        concluir = function() {
            console.log(this.items.toString())
            console.log("Pedido concluido com sucesso")
        }
    
}
var pedido1 = new Hamburguer()

pedido1.adicionar("Tomate")
pedido1.adicionar("Cebola")
pedido1.adicionar("Azeitona")
pedido1.concluir()
pedido1.remover()
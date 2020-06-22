// Função para instanciar um objeto
// ao utilizar this os atributos ficam públicos

function Produto(nome, preco, desconto = 0.15){
  this.nome = nome
  this.preco = preco
  this.desconto = desconto
  this.precoFinal = function(){
    return this.preco * ( 1 - this.desconto)
  }
}

const p1 = new Produto("Caneta", 10)
const p2 = new Produto("Geladeira", 3000)

console.log(p1.preco)
console.log(p2.precoFinal())
console.log(typeof Produto)
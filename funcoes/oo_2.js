class Produto {
  constructor(nome, preco, desconto = 0.5){
    this._nome = nome
    this._preco = preco
    this._desconto = desconto 
  }
  get produtoNome(){
    return `Nome do produto: ${this._nome}`
  }
  set nome(novoNome){
    this._nome = novoNome.toUpperCase()
  }
  set preco(novoPreco){
    if(novoPreco > 0){
      this._preco = novoPreco
    }
  }
  get preco(){
    return this._preco
  }
  get precoFinal(){
    return (this._preco * (1 - this.desconto)).toFixed(2)
  }
}

Produto.prototype.log = function(){
  console.log(`Nome: ${this.nome} Preco: R$${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
  set: function(novoDesc){
    if(novoDesc >= 0 && novoDesc<1){
      this._desconto = novoDesc
    }
  }
})

Object.defineProperty(Produto.prototype, 'descontoString', {
  get: function(){
    return `${this._desconto*100}% de desconto`
  },

})

let p1 = new Produto("Geladeira", 10000, 0.8)
// p1.nome = "Caneta"
p1.preco = 1
console.log(p1.preco)
console.log(p1.produtoNome)

p1.log()

let p2 = new Produto("Caneta", 10)

p2.desc = 0.99

console.log(p2.descontoString)

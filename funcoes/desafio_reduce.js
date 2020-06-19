Array.prototype.meuFilter = function(){
  
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    acc
    
  }
}

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil:true },
  { nome: "Impressora", qtde: 0, preco: 600, fragil:true },
  { nome: "Caderno", qtde: 4, preco: 30, fragil:false },
  { nome: "Lapis", qtde: 3, preco: 5, fragil:false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil:true },
];

const getFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getValorTotal = (acc, el) => acc + el

const fragil = carrinho.filter(getFragil)
const total = fragil.map(getTotal)
const valorTotal = total.reduce(getValorTotal)



console.log(valorTotal)
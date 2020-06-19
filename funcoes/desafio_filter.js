Array.prototype.meuFilter = function (fn) {
  const newArray = []
    for (let i = 0; i<this.length; i++){
      if(fn(this[i], i, this)){
        newArray.push(this[i])
      }
    }
  return newArray
};
const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 600 },
  { nome: "Caderno", qtde: 4, preco: 30 },
  { nome: "Lapis", qtde: 3, preco: 5.2 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;

const qtdeMaiorQueZero = item => item.preco > 8

const valoresvalidos = carrinho.meuFilter(qtdeMaiorQueZero)

console.log(valoresvalidos)

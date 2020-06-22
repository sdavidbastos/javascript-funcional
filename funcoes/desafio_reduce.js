Array.prototype.meuReduce = function(fn, inicial){
  let acc = inicial

  for(let i = 0; i<this.length;i++){
    if(!acc && i ===0){
      acc = this[i]
      continue
    }
    acc = fn(acc, this[i], i, this)
  }
  return acc
}
const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil:true },
  { nome: "Impressora", qtde: 0, preco: 600, fragil:true },
  { nome: "Caderno", qtde: 4, preco: 30, fragil:false },
  { nome: "Lapis", qtde: 3, preco: 5, fragil:false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil:true },
];

const getTotal = (item) => item.qtde * item.preco;

const getMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1
  const novoTotal = acc.total + el
  console.log(acc, el)
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal/novaQtde,
  };
};
const mediaInicial = { qtde: 0, total: 0, media: 0 }

const totais = carrinho.map(getTotal);

console.log(totais);

const totalGeral = totais.meuReduce(getMedia, mediaInicial)

console.log(totalGeral);

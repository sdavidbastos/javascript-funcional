const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 600 },
  { nome: "Caderno", qtde: 4, preco: 30 },
  { nome: "Lapis", qtde: 3, preco: 5 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getTotal = item => item.qtde * item.preco

const somar = (acc, el) => acc + el

const totais = carrinho.map(getTotal)

console.log(totais)

const totalGeral = totais.reduce(somar, 0)

console.log(totalGeral)
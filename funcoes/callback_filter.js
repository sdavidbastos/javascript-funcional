const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 600 },
  { nome: "Caderno", qtde: 4, preco: 30 },
  { nome: "Lapis", qtde: 3, preco: 5.2 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const qtdMaiorQueZero = item => item.qtde > 0
const qtdMuitoGrande= item => item.qtde > 1000
const getNome = item => item.nome
const nomeItensValido = carrinho
.filter(qtdMuitoGrande)
.map(getNome)

console.log(nomeItensValido)
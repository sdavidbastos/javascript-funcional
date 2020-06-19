Array.prototype.meuMap = function (fn) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }
  return mapped;
};

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 600 },
  { nome: "Caderno", qtde: 4, preco: 30 },
  { nome: "Lapis", qtde: 3, preco: 5.2 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;

const getValor = (item) => (item.qtde * item.preco).toFixed(2);

const carrinhNomes = carrinho.meuMap(getNome);

const carrinhoValorTotal = carrinho.meuMap(getValor);

console.log(carrinhNomes);

console.log(carrinhoValorTotal);

const nums = [1, 2, 3, 4, 5];

const dobro = (n, i, a) => n * 2 + i + a.length;

console.log(nums.map(dobro));

const nomes = ["Ana", "Bia", "Maria"];
const primeiraLetra = (texto) => texto[0];
const letras = nomes.map(primeiraLetra);
console.log(letras);

// Criação da função map

Array.prototype.meuMap = function (fn) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }
  return mapped;
};

// Arrow Function
const felizNatal = () => console.log("feliz nata!!!");
felizNatal();

const saudacao = (nome) => `Fala ${nome} !!!`;

console.log(saudacao("David"));

const somar = (...numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};

console.log(somar(1, 2, 3, 4, 5, 6, 7));

// Desafio

// function potencia(base) {
//   return function (exp) {
//     return Math.pow(base, exp);
//   };
// }

const potencia = (base) => (exp) => Math.pow(base, exp);
console.log(potencia(2)(2))

// this

Array.prototype.log = function(){
    console.log(this[this.length - 1])
}

const numeros = [1, 2, 500]
numeros.log()
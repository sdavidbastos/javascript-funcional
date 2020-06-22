const a = 1;

console.log(a);

let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(["Ana", "Bia", "David", "Tavares"]);
});

function primeiroElemeno(array){
  return array[0]
}

p.then(primeiroElemeno)
  .then((primeiro) => primeiro[0])
  .then((letra) => console.log(letra.toLowerCase()));

function gerarNumerosEntre(min, max, tempo=2000) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    setTimeout(function () {
      const fator = max - min;
      const aleatorio = parseInt(Math.random() * (fator + 1)) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarVariosNumeros(){
  return Promise.all([
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 5000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 1500),
  ])
}
console.time("Promise")
gerarVariosNumeros().then(numeros => console.log(numeros)).then(()=>{
  console.timeEnd("Promise")
})

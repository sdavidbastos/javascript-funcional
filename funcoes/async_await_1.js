function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}

// esperarPor(2000)
//   .then(()=>console.log("Executando Promise 1..."))
//   .then(esperarPor)
//   .then(()=>console.log("Executando Promise 2..."))

function retornarValor(valor=10, tempo = 500) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor), tempo);
  });
}

async function executar() {
 let valor = await retornarValor(7)

 await esperarPor(1500)
  console.log(`Async/Await ${valor}...`);

 await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}...`);

 await esperarPor(1500)
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3

}

async function retornarValorRapido(){
  return 20
}


async function executarDeVerdade() {
  const resposta = await executar()
  console.log(resposta)
}

executarDeVerdade()
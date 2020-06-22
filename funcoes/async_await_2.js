function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const fator = max - min;
    const aleatorio = parseInt(Math.random() * (fator + 1)) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    // console.log(numeros)
    return numeros;
  } catch (error) {
    if (tentativas > 10) {
      throw "Não deu bom!";
    } else {
      return gerarMegaSena(qtdeNumeros, tentativas + 1);
    }
  }
}
gerarMegaSena(15).then(console.log).catch(console.log)

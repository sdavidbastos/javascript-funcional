function funcionarOuNao(valor, chanceDeErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log("Temp")
      if (Math.random() < chanceDeErro) {
        reject("Ocorreu um Erro");
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e)
    }
  });
}

funcionarOuNao("E ai man", 0.5)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => consol.log(v),
    // (err) => console.log(`Erro específico: ${err}`)
  )
  .then(() => console.log("Quase fim"))
  .catch((error) => console.log(`Error: ${error}`))
  .then(() => console.log("Fim"));

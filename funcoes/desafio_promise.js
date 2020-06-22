const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

// function teste(fn, number1, number2){

//   return fn(number1, number2)
// }

// teste()

function lerArquivo(caminho){
  return new Promise(function(resolve){
    fs.readFile(caminho, function(_, conteudo){
      resolve(conteudo.toString())
    })
  })
}

lerArquivo(caminho)
  .then(conteudo => conteudo.split("\n"))
  .then(linha => linha.join(","))
  .then(console.log)
const fs = require("fs")
const path = require("path")

const caminho = path.join(__dirname, "dados.txt")
function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}
console.log("Inicio...")
fs.readFile(caminho, exibirConteudo)
console.log("Fim...")

console.log("Inicio...")
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log("Fim...")
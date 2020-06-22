const path = require("path");
const {
  removerElementosSeIncluir,
  removerElementosSeVazio,
  lerDiretorio,
  lerArquivos,
  elementosTerminadosCom,
  removerElementosSeApenasNumero,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordenarPorAtributoNumerico,
  escreverArquivo
} = require("./funcoes");

const caminho = path.join(__dirname, "..", "legendas");

const caminhoResultado = path.join(__dirname, "resultado.json")

const simbolos = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
  "<font",
  "</font>",
  "<b>",
  "</b>",
  'color=#'
];


lerDiretorio(caminho)
  .then(elementosTerminadosCom(".srt"))
  .then(lerArquivos)
  .then(mesclarElementos)
  .then(separarTextoPor("\n"))
  .then(removerElementosSeVazio)
  .then(removerElementosSeIncluir("-->"))
  .then(removerElementosSeApenasNumero)
  .then(removerSimbolos(simbolos))
  .then(mesclarElementos)
  .then(separarTextoPor(" "))
  .then(removerElementosSeVazio)
  .then(agruparElementos)
  .then(ordenarPorAtributoNumerico("qtde", "desc"))
  .then(escreverArquivo(caminhoResultado))
  .then(console.log)
  .catch((error) => console.log(error));

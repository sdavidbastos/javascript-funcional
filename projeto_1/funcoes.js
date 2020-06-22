const fs = require("fs");
const path = require("path");

const lerDiretorio = (caminho) => {
  return new Promise((resolve, reject) => {
    try {
      const diretorio = fs.readdirSync(caminho);
      const diretorios = diretorio.map((item) => path.join(caminho, item));
      resolve(diretorios);
    } catch (e) {
      reject(e);
    }
  });
};

const lerArquivo = (caminho) =>
  new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (error) {
      reject(e);
    }
  });

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

// fs.writeFile(
//   `${__dirname}/Resultado.txt`,
//   "E ai man, David é brabo!",
//   function (err) {
//     if (err) throw err;
//     console.log("Saved!");
//   }
// );

const escreverArquivo = (caminho) => (dados) => {
  try {
    const formatoString = JSON.stringify(dados);

    fs.writeFileSync(caminho, formatoString);

    return "Deu tudo certo";
  } catch (e) {
    return "Deu alguma coisa errada";
  }
};

const elementosTerminadosCom = (padraoTextual) => {
  return function (array) {
    return array.filter((el) => el.endsWith(padraoTextual));
  };
};

const removerElementosSeVazio = (array) => array.filter((el) => el.trim());

const removerElementosSeIncluir = (padraoTextual) => (array) =>
  array.filter((el) => !el.includes(padraoTextual));

function removerElementosSeApenasNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    //  return !(num != 0 && !!num)
    //  Só da verdadeiro se for NaN
    return num !== num;
  });
}
const removerSimbolos = (simbolos) => (array) =>
  array.map((el) =>
    simbolos.reduce((acc, simbolo) => acc.split(simbolo).join(""), el)
  );

const agruparElementos = (palavras) =>
  Object.values(
    palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = acc[el] ? acc[el].qtde + 1 : 1;
      acc[el] = { elemento: el, qtde };
      return acc;
    }, {})
  );
const ordenarPorAtributoNumerico = (attr, ordem = "asc") => (array) => {
  const asc = (o1, o2) => o1[attr] - o2[attr];
  const desc = (o1, o2) => o2[attr] - o1[attr];
  return array.sort(ordem === "asc" ? asc : desc);
};

const mesclarElementos = (array) => array.join(" ");

const separarTextoPor = (simbolo) => (texto) => texto.split(simbolo);

module.exports = {
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerElementosSeVazio,
  removerElementosSeApenasNumero,
  removerElementosSeIncluir,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordenarPorAtributoNumerico,
  escreverArquivo
};

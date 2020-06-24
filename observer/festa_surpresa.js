const readline = require("readline");

function obterResposta(pergunta) {
   const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
   });
   return new Promise((resolve) => {
      rl.question(pergunta, (resp) => {
         resolve(resp);
         rl.close();
      });
   });
}
// observer
function namorada() {
   console.log("N: Apagar as luzes");
   console.log("N: Pedir silêncio");
   console.log("N: Surpresa!!!");
}
// observer
function sindico(evento) {
   console.log("S: Monitorando barulho");
   console.log(evento.date)
   console.log(evento.resp)
}
// subject
async function porteiro(interessados) {
   while (true) {
      const resp = await obterResposta("O namorado chegou ? (s/N/q)");
      if (resp.toLowerCase() === "s") {
         (interessados || []).forEach((obs) => obs({resp, date: Date.now()}));
      } else if (resp.toLowerCase() === "q") {
         break;
      }
   }
}

/**
 * Chamada da Função -> Registra os dois observadores!
 * Os observadores são: namorada e sindico
 * O subject é o porteiro
 */

porteiro([namorada, sindico]);

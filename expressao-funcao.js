// Declaração de função:

//   function estudanteReprovou(notaFinal, faltas) {
//    if (notaFinal < 7 && faltas > 4) {
//     return true;
//    } else {
//     return false;
//    }
//   }

// Expressão de função:

// A função pode ser atribuída a uma variável
const estudanteReprovou = function (notaFinal, faltas) {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
}

console.log(estudanteReprovou(6, 5)); // passar parametros
console.log(estudanteReprovou(10, 2));

// Nota:
// Em uma função declarada de forma “comum”, é possível chamá-la antes de sua declaração devido ao hoisting,
// um comportamento do JavaScript em que declarações de variáveis e funções são movidas para o topo do escopo
// durante a fase de compilação.

// Em uma expressão de função (expressões anônimas), tentar chamar a função antes da sua definição resultará em um erro,
// pois a função ainda não foi definida. Com uma expressão de função, o JavaScript só reconhece a função
// quando o interpretador chegar nessa linha no código.
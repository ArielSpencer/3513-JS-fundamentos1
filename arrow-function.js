// função:
const estudanteReprovou = (notaFinal, faltas) => {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
}

// Arrow function:

const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
console.log(exibeNome('Caroline'));

// Arrow functions oferecem uma sintaxe mais curta para declarar funções, mas não substituem outras formas de declaração de funções.
// Elas são especialmente úteis para funções anônimas e como argumentos em funções de ordem superior.
// Diferentemente das funções tradicionais, arrow functions não têm seu próprio `this` e são mais adequadas para callbacks e funções simples.
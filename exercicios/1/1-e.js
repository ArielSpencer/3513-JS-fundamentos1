// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco.
// Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados.
// Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var fora = 'Fora do bloco';

if (true) {
  var dentro = 'Dentro do bloco';
  console.log(fora); // retorna 'Fora do bloco'
  console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

//==============================================================

let outside = 'Fora do bloco';

if (true) {
  let inside = 'Dentro do bloco';
  console.log(outside); // retorna 'Fora do bloco'
  console.log(inside); // retorna 'Dentro do bloco'
}

console.log(outside); // retorna 'Fora do bloco'
// console.log(inside); // erro 'dentro is not defined at Object.<anonymous>'
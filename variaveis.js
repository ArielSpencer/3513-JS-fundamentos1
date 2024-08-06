const estudante = 'Caroline';
let professora;
var sala = '31';

professora = 'Ana';

console.log(estudante, professora, sala);

// const é usado para declarar variáveis de escopo de bloco que não podem ser atualizadas ou redeclaradas (a forma mais utilizada de declaração);
// var é uma forma antiga de declarar variáveis que tem escopo de função e pode ser redeclarada e atualizada;
// let é uma forma moderna com escopo de bloco, permitindo que variáveis sejam atualizadas, mas não redeclaradas no mesmo bloco.

// observações:
// var é menos utilizado hoje em dia porque pode levar a comportamentos inesperados devido ao seu escopo de função e falta de bloqueio de redeclaração,
// enquanto let e const oferecem controle mais preciso e previsível sobre o escopo e a mutabilidade das variáveis.


// ------------------------------------------------------------------------------------------------------
// Exercícios:

console.log('exercício 1:');

const text = 'Hello';
const number = '123';
const boolean = 'true';

console.log(text);
console.log(number);
console.log(boolean);

console.log('exercício 2:');

const firstName = 'ariel';
const lastName = 'spencer';
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

console.log('exercício 3:');

const type = 'World';
const code = '321';
const worldName = type + ': ' + code;

console.log(worldName);

console.log('exercício 4:');

let music = 'expresso - sabrina carpenter';
console.log(music);
music = 'me too - meghan trainor';
console.log(music);

console.log('exercício 5-A:');

var outside = 'fora';

if (outside === 'fora') {
  var inside = 'dentro';
  console.log(inside);
  console.log(outside);
}

console.log(inside);
console.log(outside);

console.log('exercício 5-B:');

let fora = 'outside';

if (fora === 'outside') {
  let dentro = 'inside';
  console.log(fora);
  console.log(dentro);
}

console.log(fora);
// console.log(dentro);
// ReferenceError: dentro is not defined

console.log('exercício 6:');
let weather = 'sol';
if (weather === 'chuva') {
  console.log('levar guarda-chuva');
} else {
  console.log('não levar guarda-chuva')
}

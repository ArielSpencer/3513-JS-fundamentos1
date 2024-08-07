const notaQuintoBi = 8;
const notaSextoBi = 6.3;
const notaSetimooBi = 7;
const notaOitavoBi = 9.3;

let media = (notaQuintoBi + notaSextoBi + notaSetimooBi + notaOitavoBi) / 4; // Adição e Divisão

if (media >= 7) { // Comparação
  media += media * 0.1; // Multiplicação
}

console.log(`a média é ${media.toFixed(2)}`);

// no JavaScript, os operadores como +=, -=, *=, /=, e %= são chamados de operadores de atribuição compostos.
// eles combinam uma operação aritmética com a atribuição de um valor a uma variável.

// exemplos:

let x = 10;
x += 5; // Equivalente a x = x + 5;
console.log(`o resultado do operador += é ${x}`); // resultado: 15

let y = 10;
y -= 5; // Equivalente a y = y - 5;
console.log(`o resultado do operador += é ${y}`); // resultado: 5

let z = 10;
z *= 5; // Equivalente a z = z * 5;
console.log(`o resultado do operador += é ${z}`); // resultado: 50


// precedência de operações:
// se considerarmos a precedência correta das operações matemáticas,
// primeiro ocorre a multiplicação, depois a divisão e em seguida adição e subtração:

let resultado;
resultado = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log(`o resultado da expressão é: ${resultado}`); // resultado: 27.33333...
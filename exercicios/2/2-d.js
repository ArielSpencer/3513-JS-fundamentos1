// Crie uma variável numérica e uma string.
// Faça a conversão da variável numérica para string e da string para número.
// Exiba os tipos de dados resultantes no console.

const number = 123;
const string = '321';

const numberToString = String(number);
const stringToNumber = Number(string);

console.log('Número para string: ' + typeof numberToString);
console.log('String para número: ' + typeof stringToNumber);

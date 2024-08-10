// Crie uma variável com uma string e utilize métodos de manipulação de strings,
// como toUpperCase, toLowerCase, slice ou outros, para modificar a string original.
// Exiba os resultados finais no console.

const string = 'Já dizia o Sr. Madruga: A vingança nunca é plena, mata a alma e envenena.';

const maiusculas = string.toUpperCase();
const minusculas = string.toLowerCase();
const slice = string.slice(24, 48);
const at = string.at(11);

console.log('Maiúsculas:' + maiusculas);
console.log('Minúsculas:' + minusculas);
console.log('Slice de 24/48:' + slice);
console.log('Caractere na posição 11: ' + at);

const estudante = "Caroline";
const docente = 'Ana';
const cumprimeto = "Nosso lema é 'estudar bastante!'"; // '' podem estar dentro de ""
const citacao = `Beatriz diz: "Nosso lema é 'estudar bastante!'"`; // "" & '' podem estar dentro de ``

console.log(cumprimeto);
console.log(citacao);

// o + concatena strings:
console.log('a estudante chama ' + estudante); // forma menos utilizada

// template strings:
console.log(`a estudante chama ${estudante}`); // forma mais utilizada

// caracteres especiais:
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);


// uma forma de manipular os caracteres para unir strings e criar comparações entre valores de string
// sem se preocupar como o texto está (letras maiusculas e minusculas) pode ser feito dessa forma:
const senha = '\u2705' + ('SenhaSegura123' + docente).toUpperCase();
console.log(senha);

// para mostrar o tipo de uma variável:
console.log('estudante é do tipo:', typeof estudante);
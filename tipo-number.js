const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = '5';

const totalPrimeiroAno = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;
console.log(totalPrimeiroAno);

// o sinal de mais pode somar ou juntar textos, sendo assim em vez de somar a quarta nota foi atribuido o 5 como string após a soma dos três primeiros bimestres.

// uma das formas de converter string para número:

const notaQuintoBi = 8;
const notaSextoBi = 6.3;
const notaSetimooBi = -2;
const notaOitavoBi = Number.parseInt('5');

const totalSegundoAno = notaQuintoBi + notaSextoBi + notaSetimooBi + notaOitavoBi;
console.log(totalSegundoAno);

// para manipular a quantidade de números após a virgula:

const media = totalSegundoAno / 4;
console.log('a média é: ' + media.toFixed(2))
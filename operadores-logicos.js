// o operador || retorna verdadeiro caso ambos os operandos sejam verdadeiro;
let notaFinal = 9;
let faltas = 5;
console.log(`o aluno possui ${faltas} falta e sua nota final é: ${notaFinal}`);

if (notaFinal < 7 || faltas > 3) {
  console.log('utilizando || o aluno foi reprovado.')
} else {
  console.log('utilizando || o aluno foi aprovado (:')
}

// ------------------------------------------------------------------------------------------------------
// o operador && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.

notaFinal = 9;
faltas = 1;

console.log(`o aluno possui ${faltas} falta e sua nota final é: ${notaFinal}`);

if (notaFinal < 7 && faltas > 3) {
  console.log('utilizando && o aluno foi reprovado.')
} else {
  console.log('utilizando && o aluno foi aprovado (:')
}

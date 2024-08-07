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

// ------------------------------------------------------------------------------------------------------
// o operador ! (not/negação) inverte o valor do operando. Se o operando for true, ! retorna false. Se for false, ! retorna true.

const chuva = false;

if (!chuva) {
  console.log('não está chovendo. pode ir ao parque!')
} else {
  console.log('está chovendo. que tal um filme?')
}

// ------------------------------------------------------------------------------------------------------
// Truthy é um valor que se traduz em verdadeiro quando avaliado em um contexto Booleano.
// Todos os valores são truthy a menos que eles sejam definidos como falsy (ou seja., exceto para false, 0, "", null, undefined, e NaN).

// Exemplos de valores truthy em JavaScript (que se traduzirão em true, e então executar o bloco if):
// if (true)
// if ({})
// if ([])
// if (42)
// if ("foo")
// if (new Date())
// if (-42)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// Falsy é um valor que se traduz em falso quando avaliado em um contexto Boolean.
// Exemplos de valores falsy em JavaScript (que se traduzirá em false e assim ignorar o bloco if):
// if (false) {
//   // Not reachable
// }

// if (null) {
//   // Not reachable
// }

// if (undefined) {
//   // Not reachable
// }

// if (0) {
//   // Not reachable
// }

// if (-0) {
//   // Not reachable
// }

// if (0n) {
//   // Not reachable
// }

// if (NaN) {
//   // Not reachable
// }

// if ("") {
//   // Not reachable
// }
// if (document.all) {
//   // [1], not reachable
// }

// exemplo:
notaFinal = 9;
faltas = 2;
const advertencias = 0;

if (faltas >= 2 && !advertencias) {
  console.log('o aluno recebeu o bônus.')
} else {
  console.log('o aluno não recebeu bônus.')
}
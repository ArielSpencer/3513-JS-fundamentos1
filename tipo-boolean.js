const estudante = 'Fernando';
const estaAprovado = true;

if (estaAprovado === true) {
  console.log('Parabéns, boas festas!')
} else {
  console.log('REPROVADO, bons estudos.')
}

// o importante é o resultado da comparação

if (!estaAprovado) {
  console.log('Parabéns, boas festas!')
} else {
  console.log('REPROVADO, bons estudos.')
}

// outro exemplo:

if (estudante === 'Fernando') {
  console.log(`Olá, ${estudante}.`);
} else {
  console.log('Quem é você?')
}
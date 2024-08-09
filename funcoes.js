// declaração de uma função que não recebe parâmetros e não retorna valor

function exibeNomeProfessora() {
  console.log(`Professora: ${'Beatriz'}`);
}

exibeNomeProfessora(); // Chamar a função

// declaração de uma função que recebe um parâmetro e não retorna valor:

function exibeNomeEstudante(nome) { // nome é o parâmetro da função
  console.log(`Estudante: ${nome}`);
}

exibeNomeEstudante('Judith'); // chamar a função passando 'Caroline' como argumento
exibeNomeEstudante('Henry'); // chamar a função passando 'Caroline' como argumento

// podemos passar mais de um argumento:

function exibeNotaEstudante(nome, nota) { // nome é o parâmetro da função
  console.log(`O nome é ${nome}, e a nota é ${nota}!`);
}

exibeNotaEstudante('Judith', 7); // nesse caso os parametros seguem a ordem de declaração
exibeNotaEstudante(7, 'Judith'); // exemplo de como fica declarando ao contrario

// declaração de uma função que recebe um parâmetro e retorna valor:

// return garante que todo processamento feito dentro da função ficará disponível para ser utilizada fora dela
// e envia o valor de volta para onde a função foi chamada.
// nota: o console.log apenas exibe e não faz nenhum processamento, para isso utilizar o return.

function exibeInfosEstudante(nome, RA) {
  return `O nome é ${nome} e o RA é ${RA}`;
}

console.log(exibeInfosEstudante('Stuart', 98453));

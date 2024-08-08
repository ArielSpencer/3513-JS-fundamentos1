const estaAprovado = true;

// Comparação estrita (===) para verificar se 'estaAprovado' é exatamente true.
if (estaAprovado === true) {
  console.log('aprovado');
}

// Comparação não estrita (==) é feita entre a string '0' e o número 0.
// O operador == faz conversão de tipo, então a string '0' é convertida para o número 0 antes da comparação.
if ('0' == 0) {
  console.log('0 passou na comparação');
} else {
  console.log('0 não passou na comparação');
}

// Comparação estrita (===) é feita entre a string '1' e o número 1.
// O operador === não faz conversão de tipo e verifica tanto o valor quanto o tipo.
if ('1' === 1) {
  console.log('1 passou na comparação');
} else {
  console.log('1 não passou na comparação');
}

// para garantir que o código funcione da melhor forma, evitando bugs comparando string e number por exemplo,
// sempre utilizar === para comparação, assim garantindo que o valor e o tipo sejam iguais.

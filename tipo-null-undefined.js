let nomeEstudante;
console.log(nomeEstudante); // o valor é indefinido / undefined
console.log(typeof nomeEstudante); // o tipo de dado é undefined

let telefoneEstudante = null; // não existir é diferente de undefined, é útil para formulários de cadastro quando existe o campo mas ainda não existem dados;

console.log(nomeEstudante + 3); // NaN = é um valor do tipo número que representa uma operação malformada ou inválida
console.log(telefoneEstudante + 3); // resultado 3 = nesse caso o null se comporta como 0

const professora = 'Ana';
console.log(typeof professora); // string

// por um erro no passado do js, null é tratado como tipo object:
console.log(typeof telefoneEstudante);

// função auxiliar para contornar o typeof de null = object:
console.log('contornando null = object:')
function tipoDe(valor) {
  if (valor === null) {
    return 'null';
  }
  return typeof valor;
}

console.log(tipoDe(null));        // "null"
console.log(tipoDe(31));          // "number"
console.log(tipoDe('texto'));     // "string"
console.log(tipoDe({}));          // "object"
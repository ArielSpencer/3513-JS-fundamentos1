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
//uma forma de contornar o typeof de null:
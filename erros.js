console.log(variavel); // ReferenceError: variavel is not defined => a variável não é acessivel por não ter sido declarada;
console.log('oi' // SyntaxError: missing ) after argument list => erro de sintaxe;

// exemplo de erro:

// console.log('oi' // Linha 2: Erro de sintaxe. O `console.log` está faltando um parêntese de fechamento.
//             ^^^^
// O `^^` indica a posição do erro, que é onde o código está incompleto.

// SyntaxError: missing ) after argument list
// Mensagem de erro que indica que um parêntese de fechamento está faltando após a lista de argumentos.

// fluxo de execução do código que leva ao erro:
// at wrapSafe (node:internal/modules/cjs/loader:1281:20)
// at Module._compile (node:internal/modules/cjs/loader:1321:27)
// at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
// at Module.load (node:internal/modules/cjs/loader:1208:32)
// at Module._load (node:internal/modules/cjs/loader:1024:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
// at node:internal/main/run_main_module:28:49
const estudante = 'Caroline';
let professora;
var sala = '31';

professora = 'Ana';

console.log(estudante, professora, sala);

// const é usado para declarar variáveis de escopo de bloco que não podem ser atualizadas ou redeclaradas (a forma mais utilizada de declaração);
// var é uma forma antiga de declarar variáveis que tem escopo de função e pode ser redeclarada e atualizada;
// let é uma forma moderna com escopo de bloco, permitindo que variáveis sejam atualizadas, mas não redeclaradas no mesmo bloco.

// observações:
// var é menos utilizado hoje em dia porque pode levar a comportamentos inesperados devido ao seu escopo de função e falta de bloqueio de redeclaração,
// enquanto let e const oferecem controle mais preciso e previsível sobre o escopo e a mutabilidade das variáveis.
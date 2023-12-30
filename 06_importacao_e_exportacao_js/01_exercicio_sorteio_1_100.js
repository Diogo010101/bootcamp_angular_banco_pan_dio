/**Uma sala contem 5 alinos e para cada aluno foi sorteado um número de 1 a 100.
 * faça um programa que recebe 5 números sorteados para os alunos e mostre o maior número sorteado.
 * 
 * Dados de entrada:
 * 5
 * 50
 * 10
 * 98
 * 23
 * 
 * 
 * Saída
 * 98
 */

const { gets, print} = require('./00_funcoes_auxiliares');
const listaNumeros = [];

for(let i = 0; i <= 4; i++){
    listaNumeros.push(gets());


}

print(listaNumeros)
const maior = Math.max.apply(null, listaNumeros);

print(`O maior número foi ${maior}`);


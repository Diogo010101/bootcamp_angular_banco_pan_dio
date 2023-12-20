/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

let precoCombustivel = 6.50;
let gastoMedioCombustivelLitroKm = 12;
let distanciaViagemKm = 100;

let litrosConsumidos = precoCombustivel / gastoMedioCombustivelLitroKm;
console.log(litrosConsumidos.toFixed(2))

const resultado = distanciaViagemKm * litrosConsumidos;

console.log(`Para uma viagem de ${distanciaViagemKm}KM de distância, você vai gastar ${resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de combustível`);


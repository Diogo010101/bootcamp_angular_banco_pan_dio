/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - preço do etanol;
2- Preço da gasolina;
3- o tipo de combustível que está no seu carro;
4- gasto médio de combustível do carro por KM;
5- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/


const precoEtanol = 3.64;
const precoGasolina = 5.63;

let litroPorKmRodado = 12;
let distanciaViagemKm = 100;
let tipoCombustivel = "gasolina"
let custoKmLt = 0;
let gastoViagem = 0;


if(tipoCombustivel.toUpperCase() === "ETANOL"){
    custoKmLt = precoEtanol / litroPorKmRodado;
    gastoViagem = custoKmLt * distanciaViagemKm
    console.log(`O custo total da viagem será de ${gastoViagem.toLocaleString('pt-BR',{style: 'currency', currency: 'BLR'})}`)
} else if (tipoCombustivel.toUpperCase() === "GASOLINA"){
    custoKmLt = precoGasolina / litroPorKmRodado;
    gastoViagem = custoKmLt * distanciaViagemKm
    console.log(`O custo total da viagem será de ${gastoViagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BLR' })}`)
}else{
    console.log("Verifique as informações digitadas")
}
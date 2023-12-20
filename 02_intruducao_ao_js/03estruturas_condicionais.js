/*let corCamiseta = "Azul"

console.log(corCamiseta == "Azul")*/

/*
let numero = 0;
let numeroFinal = Number(numero);


if(numeroFinal === 0){
    console.log(`Você digitou o número ${numeroFinal}, insira um número diferente de 0`)
}else if(numeroFinal % 2 === 0){
    console.log(`Par`)
}else{
    console.log("Impar")
}*/

//outra forma de se fazer

let numero = 5;
const isPar = (numero % 2) === 0


if (numero === 0) {
    console.log(`Você digitou o número ${numero}, insira um número diferente de 0`)
} else if (isPar) {
    console.log(`Par`)
} else {
    console.log("Impar")
}
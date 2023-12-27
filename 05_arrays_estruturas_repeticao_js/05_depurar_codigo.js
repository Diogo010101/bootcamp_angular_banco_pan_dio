const notas = [];

notas.push(10);
notas.push(5);
notas.push(7);

let media = 0;

for (let i = 0; i < notas.length; i++){
    console.log(`Indice: ${i}`)
    console.log(`notas: ${notas[i]}`)
    console.log(`Média: ${media}`)
    media = media + notas[i];
    console.log(`Média atualizada: ${media}`)
}

const mediaFinal = media / notas.length;
console.log(`Média ${mediaFinal.toFixed(1)}`);
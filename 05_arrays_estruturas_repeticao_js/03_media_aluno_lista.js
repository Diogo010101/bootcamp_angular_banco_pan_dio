const notas = [];

notas.push(10);
notas.push(8);
notas.push(7);
notas.push(6);
notas.push(9);

console.log(notas)

const tamanho = notas.length;
let media = 0;
let mediaFinal = 0;
let i = 0;

/*for(let i = 0; i < tamanho; i++){
    media = media + notas[i]
}

mediaFinal = media / notas.length

console.log(mediaFinal = mediaFinal)*/




/*while(i < tamanho){
    media = media + notas[i];
    console.log(media);
    i++;
}

mediaFinal = media / tamanho;
console.log(`Média: ${mediaFinal}`)*/


do{
    media = media + notas[i];
    console.log(media);
    i++;

} while (i < tamanho);

mediaFinal = media / tamanho;

console.log(`Média: ${mediaFinal}`)
/*Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da fazuldade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Classificação:
Menor que 5 = reprovação
Entre 5 e 7 =  recuperação
Acima de 7 = 7 passou de semestre */

const nota1 = 10;
const nota2 = 5;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3
if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10){
    console.log(`As notas devem conter um valor entre 0 e 10 cada`)
}else if(media < 5){
    console.log(`Média: ${media.toFixed(1)} - Reprovado!`)
}else if(media >= 5 && media <= 7){
    console.log(`Média: ${media.toFixed(1)} - Recuperação!`)
}else if(media >7 && media <=10){
    console.log(`Média: ${media.toFixed(1)} - Passou de emestre!`)
}else{
    console.log(`Valor inválido, verifique as notas digitadas`)
}
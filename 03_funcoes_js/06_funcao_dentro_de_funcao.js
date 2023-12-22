function dizerMeuNome(nome) {
    return `Meu nome é ${nome}`
}


function verificarIdade(idade) {
    if (idade < 0) {
        return `informe uma idade válida`;
    } else if (idade >= 0 && idade < 18) {
        return `${idade} anos, sou menor de idade`;
    } else if (idade >= 18) {
        return `${idade} anos, sou maior de idade`;
    } else {
        return `Verifique as informações digitadas`;
    }
}


function main(){
    console.log(`${dizerMeuNome('Diogo')}, Eu tenho ${verificarIdade(29)}`);
}


main()
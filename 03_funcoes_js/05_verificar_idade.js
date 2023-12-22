function verificarIdade(idade){
    if(idade < 0){
       return `informe uma idade válida`;
    }else if(idade>=0 && idade <18){
       return `${idade} anos, você ainda é menor de idade`;
    }else if(idade >= 18){
        return `${idade} anos, você é maior de idade`;
    }else{
        return `Verifique as informações digitadas`;
    }
}

console.log(verificarIdade("18"));
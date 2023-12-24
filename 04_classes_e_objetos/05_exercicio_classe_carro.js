/*Crie uma classe para representar carros
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. */

class Carro{
    marca;
    cor;
    kmLitro;

    constructor(marca = 'Sem Marca', cor = 'Sem Cor', kmLitro = 12){
        this.marca = marca;
        this.cor = cor;
        this.kmLitro = kmLitro;
    }

    gastoComViagem(kmDaViagem, valorCombustivel ){
        let valorPorLitro = valorCombustivel / this.kmLitro;
        const gastoFinal = kmDaViagem * valorPorLitro
        return `O valor gasto para uma viagem de ${kmDaViagem}Km será de ${gastoFinal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}).replace(',','.')}`;
    }
}

const ka = new Carro('Ford','Branco','12');


console.log(ka.gastoComViagem(100, 6.42));
/*Crie uma classe para representar pessoas 
Para cada pessoa teremos os atributos: nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * 2));
Instancie uma pessoa chamada josé que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer o valor do seu IMC.*/

class Pessoa{
    nome;
    peso;
    altura;


    constructor(nome = 'Sem nome', peso = 86, altura = 1.86){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    informarIMC(){
        const IMC = this.peso / (this.altura * 2);
        if (IMC < 18.5) {
            return `IMC: ${IMC.toFixed(2)} - Abaixo do peso`
        } else if (IMC >= 18.5 && IMC <= 25) {
            return `IMC: ${IMC.toFixed(2)} - Peso ideal`
        } else if (IMC > 25 && IMC <= 30) {
            return `IMC: ${IMC.toFixed(2)} - Acima do peso`
        } else if (IMC > 30 && IMC <= 40) {
            return `IMC: ${IMC.toFixed(2)} - Obesidade`
        } else {
            return `IMC: ${IMC.toFixed(2)} - Obesidade grave`
        }
    }

    retornarIMC() {
        const IMC = this.peso / (this.altura * 2);
        return IMC;
    }
}

const jose = new Pessoa('José', 70, 1.75);

console.log(jose.informarIMC());
class Pessoa {
    nome;
    idade;
    dataNascimento;

    constructor(nome = 'Não nomeado', idade = 18) {
        let dataAtual = new Date()
        let anoAtual = dataAtual.getFullYear()
        this.nome = nome;
        this.idade = idade
        this.dataNascimento = anoAtual - idade;
    }

    descrever() {
        console.log(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos de idade, nasci em ${this.dataNascimento}`)
    }
}


function compararPessoas(pessoa1, pessoa2){
    if(pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velho, ele tem ${pessoa1.idade} anos de idade, ele nasceu em ${pessoa1.dataNascimento}`)
    }else if(pessoa2.idade > pessoa1.idade){
        console.log(`${pessoa2.nome} é mais velha, ela tem ${pessoa2.idade} anos de idade.`)
    }else{
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
    }

}

const diogo = new Pessoa('Diogo', 29);
const joyce = new Pessoa('Joyce', 27);

compararPessoas(diogo,joyce)

class Pessoa {
    nome;
    idade;
    dataNascimento;

    constructor(nome = 'Não nomeado', idade = 18){
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


const diogo = new Pessoa('Diogo',29);

const joyce = new Pessoa();

const peter = new Pessoa();

const harry = new Pessoa();

diogo.descrever()
joyce.descrever()
peter.descrever()
harry.descrever()




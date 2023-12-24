class Pessoa{
    nome;
    idade;

    descrever(){
        let dataAtual = new Date()
        let anoAtual = dataAtual.getFullYear()
        console.log(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos de idade, nasci em ${anoAtual - this.idade}`)
    }
}



const diogo = new Pessoa();
diogo.nome = 'Diogo';
diogo.idade = 29;

const joyce = new Pessoa();
joyce.nome = 'Joyce';
joyce.idade = 27;

const peter = new Pessoa();
peter.nome = 'Peter';
peter.idade = 4;

const harry = new Pessoa();
harry.nome = 'Harry';
harry.idade = 0;



diogo.descrever()
joyce.descrever()
peter.descrever()
harry.descrever()




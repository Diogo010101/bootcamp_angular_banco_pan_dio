const pessoa = {
    nome:"Diogo",
    idade:29,
    sexo:"M",
    formacao:'Análise e Desenvolimento de Sistemas',

    descrever: function(nome = this.nome, idade = this.idade, formacao = this.formacao){
        console.log(`Meu nome é ${nome}, tenho ${idade} anos e sou formado em ${formacao}`)

    }

}

pessoa.nome = 'Maria'

console.log(pessoa["nome"])




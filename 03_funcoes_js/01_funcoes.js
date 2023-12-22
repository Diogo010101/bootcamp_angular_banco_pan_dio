/*let nome = "Diogo";
let idade = 29;

function apresentacao(){
    console.log(`Olá meu nome é ${nome} e eu tenho ${idade} anos.`);
}

apresentacao()*/

//Função com parametro

/*function meuNome(nome = 'Vitor Roque'){
    console.log(`Meu nome é ${nome}`)

}

meuNome()*/

//Função com retorno

function quadrado(valor){
    return valor * valor;
}

console.log(`Também podemos mostrar o valor assim: ${quadrado(2)}\n`)
let resultado = quadrado(10);

console.log(resultado);


/*
 * Desafio 4 Condições de pagamento

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual ler qual a condição de pagamento escolhida e efetuar o cálculo adequando.
 

Código Condição de pagamento
- À vista débito, recebe 18% de desconto;
- À vista no dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas, preço normal de etiqueta mais juros de 10%;
 */

const produto = 'geladeira';
let valorProduto = 1800;
let formaPagamento = 'dinheiro';
let parcelamento = 3;
let desconto = 0;
let juros = 0;
let valorFinal = 0;
let valorParcela = 0;

if (parcelamento <= 0){
    console.log('Verifique as informações digitadas')
} else if (formaPagamento.toUpperCase() === 'DEBITO' && parcelamento === 1 ){
    desconto = 18
    valorFinal = valorProduto - ((valorProduto * desconto) / (100));
    console.log(`Forma de pagamento: ${formaPagamento.toUpperCase()}\nProduto: ${produto.toUpperCase()} ${valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nParcelamento: ${parcelamento}x recebe ${desconto}% de desconto\nValor final: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BLR' })}`);
}else if(parcelamento === 2 && formaPagamento.toUpperCase() === 'DEBITO'){
    valorFinal = valorProduto;
    valorParcela = valorProduto / 2;
    console.log(`Forma de pagamento: ${formaPagamento}\nProduto: ${produto.toUpperCase()} ${valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nParcelamento: ${parcelamento}x sem juros de ${valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nValor final: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}else if(parcelamento === 1 && formaPagamento.toUpperCase() === 'DINHEIRO' || formaPagamento.toUpperCase() === 'PIX' ){
    desconto = 15
    valorFinal = valorProduto - ([valorProduto * desconto] / (100));
    console.log(`Forma de pagamento: ${formaPagamento}\nProduto: ${produto.toUpperCase()} ${valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nParcelamento: ${parcelamento}x recebe ${desconto}% de desconto\nValor final: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}else if(parcelamento > 2 && formaPagamento.toUpperCase() === 'DEBITO'){
    valorFinal = valorProduto;
    juros = 10;
    valorFinal = valorProduto + ((valorProduto * juros) / 100 );
    valorParcela = valorFinal / parcelamento;
    console.log(`Forma de pagamento: ${formaPagamento}\nProduto: ${produto.toUpperCase()} ${valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nParcelamento: ${parcelamento}x com juros de ${juros}%\nValor da parcela com juros ${valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nValor final: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BLR' })}`);
}else{
    console.log(`Erro nas informações fronecidas`);
};

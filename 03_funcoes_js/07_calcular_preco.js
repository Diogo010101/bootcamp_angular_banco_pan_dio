

function calcularDebitoAVista(produto ='Não informado', valorProduto = 1000, formaPagamento = 'debito', parcelamento = 1){

    let desconto = 0;
    let juros = 0;
    let valorFinal = 0;
    let valorParcela = 0;

    if (parcelamento <= 0) {
        return 'Verifique as informações digitadas'
    } else if (formaPagamento.toUpperCase() === 'DEBITO' && parcelamento === 1) {
        desconto = 18
        valorFinal = valorProduto - ((valorProduto * desconto) / (100));
        return `Forma de pagamento: ${formaPagamento.toUpperCase()}\nProduto: ${produto.toUpperCase()} ${valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nParcelamento: ${parcelamento}x recebe ${desconto}% de desconto\nValor final: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BLR' })}`;
    } else if (parcelamento === 2 && formaPagamento.toUpperCase() === 'DEBITO') {
        valorFinal = valorProduto;
        valorParcela = valorProduto / 2;
        return `Forma de pagamento: ${formaPagamento}\nProduto: ${produto.toUpperCase()} ${valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nParcelamento: ${parcelamento}x sem juros de ${valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nValor final: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    } else if (parcelamento === 1 && formaPagamento.toUpperCase() === 'DINHEIRO' || formaPagamento.toUpperCase() === 'PIX') {
        desconto = 15
        valorFinal = valorProduto - ([valorProduto * desconto] / (100));
        return `Forma de pagamento: ${formaPagamento}\nProduto: ${produto.toUpperCase()} ${valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nParcelamento: ${parcelamento}x recebe ${desconto}% de desconto\nValor final: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    } else if (parcelamento > 2 && formaPagamento.toUpperCase() === 'DEBITO') {
        valorFinal = valorProduto;
        juros = 10;
        valorFinal = valorProduto + ((valorProduto * juros) / 100);
        valorParcela = valorFinal / parcelamento;
        return `Forma de pagamento: ${formaPagamento}\nProduto: ${produto.toUpperCase()} ${valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nParcelamento: ${parcelamento}x com juros de ${juros}%\nValor da parcela com juros ${valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\nValor final: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BLR' })}`;
    } else {
        return `Erro nas informações fronecidas`;
    };

}


(function(){
    console.log(calcularDebitoAVista('Máquina de Lavar Roupa',1800,'debito',1))
    
})()





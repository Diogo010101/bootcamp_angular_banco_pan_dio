function calcularJuros(valor, percentualDeJuros) {
    return (valor * percentualDeJuros) / 100;
}

function calcularIMC(altura = 1.80, peso = 90) {
    const imc = peso / (altura * 2);
    return imc;
}

function informarIMC(imc) {
    if (imc < 18.5) {
        return `IMC: ${imc.toFixed(2)} - Abaixo do peso`
    } else if (imc >= 18.5 && imc <= 25) {
        return `IMC: ${imc.toFixed(2)} - Peso ideal`
    } else if (imc > 25 && imc <= 30) {
        return `IMC: ${imc.toFixed(2)} - Acima do peso`
    } else if (imc > 30 && imc <= 40) {
        return `IMC: ${imc.toFixed(2)} - Obesidade`
    } else if (imc > 40) {
        return `IMC: ${imc.toFixed(2)} - Obesidade grave`
    }

}


//main - função anônima
(function () {
    calcularJuros(200, 20)
    const imc = calcularIMC(1.70, 90)
    console.log(informarIMC(imc))
})()




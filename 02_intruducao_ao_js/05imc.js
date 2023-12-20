const altura = 1.76;
const peso = 85

const imc = peso / (altura * 2);

if(altura == null || peso == null || altura <= 0 || peso <= 0){
    console.log("Verifique as informações digitadas")
}else if(imc < 18.5){
    console.log(`IMC: ${imc.toFixed(2)} - Abaixo do peso`)
}else if(imc >= 18.5 && imc <= 25){
    console.log(`IMC: ${imc.toFixed(2)} - Peso ideal`)
}else if(imc > 25 && imc <=30){
    console.log(`IMC: ${imc.toFixed(2)} - Acima do peso`)
}else if(imc >30 && imc <= 40){
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade`)
}else if(imc > 40){
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade grave`)
};
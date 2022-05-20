

const calcular = document.querySelector('.calcular');


function imc(){
    const resultado = document.querySelector('.resultado');
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const valorImc = (peso / (altura*altura)).toFixed(2);

    if(nome === '' && altura === '' && peso === '') {
        resultado.textContent = 'Preencha todos os campos.';
        let classificação = '';

    } else if(valorImc < 18.5) {
        classificação = 'abaixo do peso';

    } else if(valorImc < 24.9){
        classificação = 'com peso normal';
    } else if(valorImc < 29.9){
        classificação = ' com excesso de peso';
    } else if(valorImc < 34.9){
        classificação = 'com obesidade grau I';
    } else if(valorImc < 39.9){
        classificação = 'com obesidade grau II (severa)';
    }  else (valorImc >= 40){
        classificação = 'com obesidade grau III(móbida), CUIDADO!!!';
    }

    resultado.innerHTML = `${nome} seu IMC é ${valorImc} e você está ${classificação}.`;
    
}
calcular.addEventListener('click', imc);


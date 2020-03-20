//Calculo de IMC - Março 2019

var pacientes = document.querySelectorAll(".paciente");

for(var i= 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    pesoEhValido = validaPeso(peso);
    alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso Inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculoImc(peso, altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

function validaPeso(peso){

    if (peso >= 0 && peso <= 250) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 2.50) {
        return true;
    } else {
        return false;
    }
}

function calculoImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);
    
    return imc;

}
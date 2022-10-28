var nome = prompt("Qual é o seu nome?");
var numeroSecreto = parseInt(Math.random() * 21);
var tentativas = 1;

function chutar(tentativa){
    var input = document.getElementById("tentativa");
    var button = document.querySelector("button");
    var numero = parseInt(input.value);
    var resultado = document.getElementById("resultado");

    if(numero === numeroSecreto) {
        resultado.innerHTML = "Parabéns " + nome +  " você acertou!";
        input.setAttribute("disabled", "disabled");
        button.setAttribute("disabled", "disabled");
    }
    else if(tentativas === 6){
        resultado.innerHTML = "Que pena, " + nome + ".Suas chances acabaram! O número secreto era: " + numeroSecreto;
        input.setAttribute("disabled", "disabled");
        button.setAttribute("disabled", "disabled");
    }
    else if(numero <= 0 || numero > 21){
        resultado.innerHTML = "Número Inválido! " + tentativas + " tentativa";
        input.value = '';
        tentativas++;
    }
    else {
        resultado.innerHTML = "Este não é o número secreto! " + tentativas + " tentativa";
        input.value = '';
        tentativas++;
    }
}

function atualizarTempo(){
    var data = new Date()
    var horario = corrigirHorario(data.getHours()) + ':' + corrigirHorario(data.getMinutes()) + ":" + corrigirHorario(data.getSeconds())
    var display = document.querySelector('.display')
    display.textContent = horario
}

function corrigirHorario(numero){
    if (numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

atualizarTempo()
setInterval(atualizarTempo,1000)

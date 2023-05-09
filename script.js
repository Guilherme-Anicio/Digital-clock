function relogio(){

    var date = new Date();
    
    var hora_atual = date.getHours();
    var minuto_atual = date.getMinutes();
    var segundo_atual = date.getSeconds();

    var hora_relogio = document.getElementById('horas').children[0].children[0];
    var minuto_relogio = document.getElementById('minutos').children[0].children[0];
    var segundo_relogio = document.getElementById('segundos').children[0].children[0];

    if (hora_atual < 10) {
        hora_atual = '0' + hora_atual;
    }

    if (minuto_atual < 10) {
        minuto_atual = '0' + minuto_atual;
    }

    if (segundo_atual < 10) {
        segundo_atual = '0' + segundo_atual;
    }

    hora_relogio.textContent = hora_atual;
    minuto_relogio.textContent = minuto_atual;
    segundo_relogio.textContent = segundo_atual;

}

setInterval(relogio, 500);
document.addEventListener('DOMContentLoaded', function () {
    // Establecer el tiempo en segundos
    var tiempoRestante = 3600; // Cambia este valor al tiempo deseado en segundos
    
    var contadorElemento = document.getElementById('contador');
    var botonDescarga = document.getElementById('boton-descarga');

    function actualizarContador() {
        var minutos = Math.floor(tiempoRestante / 60);
        var segundos = tiempoRestante % 60;
        contadorElemento.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    }

    function habilitarDescarga() {
        botonDescarga.style.display = 'block';
    }

    function iniciarTemporizador() {
        var temporizador = setInterval(function () {
            tiempoRestante--;

            if (tiempoRestante <= 0) {
                clearInterval(temporizador);
                habilitarDescarga();
            }

            actualizarContador();
        }, 1000);
    }

    // Iniciar temporizador cuando la página se carga
    iniciarTemporizador();
});

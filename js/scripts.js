// JS/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Calculadoras de MRU

    // Calcular Velocidad
    const formMRUvel = document.getElementById('formMRUvel');
    formMRUvel.addEventListener('submit', (e) => {
        e.preventDefault();
        const distancia = parseFloat(document.getElementById('mru-distancia').value);
        const tiempo = parseFloat(document.getElementById('mru-tiempo').value);
        if (tiempo !== 0) {
            const velocidad = distancia / tiempo;
            document.getElementById('resultado-mru').innerText = `Velocidad (v) = ${velocidad.toFixed(2)} m/s`;
        } else {
            document.getElementById('resultado-mru').innerText = 'El tiempo no puede ser cero.';
        }
    });

    // Calcular Distancia
    const formMRUdist = document.getElementById('formMRUdist');
    formMRUdist.addEventListener('submit', (e) => {
        e.preventDefault();
        const velocidad = parseFloat(document.getElementById('mru-velocidad1').value);
        const tiempo = parseFloat(document.getElementById('mru-tiempo1').value);
        const distancia = velocidad * tiempo;
        document.getElementById('resultado1-mru').innerText = `Distancia (d) = ${distancia.toFixed(2)} m`;
    });

    // Calcular Tiempo
    const formMRUtie = document.getElementById('formMRUtie');
    formMRUtie.addEventListener('submit', (e) => {
        e.preventDefault();
        const distancia = parseFloat(document.getElementById('mru-distancia2').value);
        const velocidad = parseFloat(document.getElementById('mru-velocidad2').value);
        if (velocidad !== 0) {
            const tiempo = distancia / velocidad;
            document.getElementById('resultado2-mru').innerText = `Tiempo (t) = ${tiempo.toFixed(2)} s`;
        } else {
            document.getElementById('resultado2-mru').innerText = 'La velocidad no puede ser cero.';
        }
    });

    // Calculadoras de MRUV

    // Calcular Velocidad Final
    const formMRUVvel = document.getElementById('formMRUVvel');
    formMRUVvel.addEventListener('submit', (e) => {
        e.preventDefault();
        const velocidadInicial = parseFloat(document.getElementById('mruv-inicial').value);
        const aceleracion = parseFloat(document.getElementById('mruv-aceleracion').value);
        const tiempo = parseFloat(document.getElementById('mruv-tiempo').value);
        const velocidadFinal = velocidadInicial + (aceleracion * tiempo);
        document.getElementById('resultado-mruv-vel').innerText = `Velocidad Final (v) = ${velocidadFinal.toFixed(2)} m/s`;
    });

    // Calcular Distancia Recorrida
    const formMRUVdist = document.getElementById('formMRUVdist');
    formMRUVdist.addEventListener('submit', (e) => {
        e.preventDefault();
        const velocidadInicial = parseFloat(document.getElementById('mruv-inicial1').value);
        const aceleracion = parseFloat(document.getElementById('mruv-aceleracion1').value);
        const tiempo = parseFloat(document.getElementById('mruv-tiempo1').value);
        const distancia = (velocidadInicial * tiempo) + (0.5 * aceleracion * Math.pow(tiempo, 2));
        document.getElementById('resultado-mruv-dist').innerText = `Distancia Recorrida (s) = ${distancia.toFixed(2)} m`;
    });

    // Calcular Aceleración
    const formMRUVace = document.getElementById('formMRUVace');
    formMRUVace.addEventListener('submit', (e) => {
        e.preventDefault();
        const velocidadFinal = parseFloat(document.getElementById('mruv-final').value);
        const velocidadInicial = parseFloat(document.getElementById('mruv-inicial2').value);
        const tiempo = parseFloat(document.getElementById('mruv-tiempo2').value);
        if (tiempo !== 0) {
            const aceleracion = (velocidadFinal - velocidadInicial) / tiempo;
            document.getElementById('resultado-mruv-ace').innerText = `Aceleración (a) = ${aceleracion.toFixed(2)} m/s²`;
        } else {
            document.getElementById('resultado-mruv-ace').innerText = 'El tiempo no puede ser cero.';
        }
    });
});

document.getElementById("btnCalc").addEventListener('click', () => {
    const raio = parseFloat(document.getElementById("raio").value);
    const resultado = document.getElementById("resultado");
    const pi = 3.14159;
    const area = pi * (raio * raio);

    resultado.value = `A=${area}`
});
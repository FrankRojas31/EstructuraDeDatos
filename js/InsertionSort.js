function mostrarValor() {
    const valorInput = document.getElementById("valorInput").value;
    const valores = valorInput.split(', ').map(Number); // Dividir la cadena en valores y convertirlos a números
    
    // Implementación del algoritmo de ordenamiento por inserción
    for (let i = 1; i < valores.length; i++) {
        const valorActual = valores[i];
        let j = i - 1;
        
        while (j >= 0 && valores[j] > valorActual) {
            valores[j + 1] = valores[j];
            j--;
        }
        
        valores[j + 1] = valorActual;
    }
    
    document.getElementById("retornoValor").value = valores.join(', '); // Mostrar los valores ordenados
}

function volverAlInicio() {
    window.location.href = './index.html'; // Cambia './index.html' a la ruta de tu página de inicio
}
function mostrarValor() {
    const valorInput = document.getElementById("valorInput").value;
    const valores = valorInput.split(', ').map(Number); // Dividir la cadena en valores y convertirlos a números
    
    // Implementación del algoritmo de ordenamiento Selection Sort
    function selectionSort(arr) {
        const n = arr.length;
        
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            if (minIndex !== i) {
                // Intercambiar elementos si no están en el orden correcto
                const temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
        
        return arr;
    }
    
    const valoresOrdenados = selectionSort(valores);
    
    document.getElementById("retornoValor").value = valoresOrdenados.join(', '); // Mostrar los valores ordenados
}

function volverAlInicio() {
    window.location.href = './index.html'; // Cambia './index.html' a la ruta de tu página de inicio
}
function mostrarValor() {
    const valorInput = document.getElementById("valorInput").value;
    const valores = valorInput.split(', ').map(Number); // Dividir la cadena en valores y convertirlos a números
    
    // Implementación del algoritmo de ordenamiento Quick Sort
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        
        const pivot = arr[0];
        const left = [];
        const right = [];
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    
    const valoresOrdenados = quickSort(valores);
    
    document.getElementById("retornoValor").value = valoresOrdenados.join(', '); // Mostrar los valores ordenados
}

function volverAlInicio() {
    window.location.href = './index.html'; // Cambia './index.html' a la ruta de tu página de inicio
}
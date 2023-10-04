function mostrarValor() {
    const valorInput = document.getElementById("valorInput").value;
    const valores = valorInput.split(', ').map(Number); 

    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const medio = Math.floor(arr.length / 2);
        const izquierda = arr.slice(0, medio);
        const derecha = arr.slice(medio);
        return combinar(mergeSort(izquierda), mergeSort(derecha));
    }
    
    function combinar(izquierda, derecha) {
        let resultado = [];
        let i = 0;
        let j = 0;
    
        while (i < izquierda.length && j < derecha.length) {
            if (izquierda[i] < derecha[j]) {
                resultado.push(izquierda[i]);
                i++;
            } else {
                resultado.push(derecha[j]);
                j++;
            }
        }
    
        return resultado.concat(izquierda.slice(i), derecha.slice(j));
    }
    
    const valoresOrdenados = mergeSort(valores);
    
    document.getElementById("retornoValor").value = valoresOrdenados.join(', '); // Mostrar los valores ordenados
}

function volverAlInicio() {
    window.location.href = './index.html'; // Cambia './index.html' a la ruta de tu página de inicio
}
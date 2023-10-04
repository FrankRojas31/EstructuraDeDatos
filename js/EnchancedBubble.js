function mostrarValor() {
    const valorInput = document.getElementById("valorInput").value;
    const valores = valorInput.split(', ').map(Number);
    
    for (let i = 0; i < valores.length - 1; i++) {
        for (let j = 0; j < valores.length - i - 1; j++) {
            if (valores[j] > valores[j + 1]) {
                const temp = valores[j];
                valores[j] = valores[j + 1];
                valores[j + 1] = temp;
            }
        }
    }
    
    document.getElementById("retornoValor").value = valores.join(', ');
}

function volverAlInicio() {
    window.location.href = './index.html';
}

function agregarComa() {
    const valorInput = document.getElementById('valorInput');
    const valor = valorInput.value;
    const nuevoValor = valor.replace(/ /g, ', ');
    valorInput.value = nuevoValor;
  }
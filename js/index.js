    function mostrarConfirmacion(url) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Quieres ir a este método de arreglo?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, ir',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = url; // Redirige si el usuario confirma
            }
        });
    }
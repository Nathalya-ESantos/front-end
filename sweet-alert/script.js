// Alerta Básico
document.getElementById('alertBasico').addEventListener('click', function() {
    Swal.fire(
        'Alerta Básico!',
        'Este é um alerta simples.',
        'question'
    );
});

// Alerta de Sucesso
document.getElementById('alertSucesso').addEventListener('click', function() {
    Swal.fire(
        'Sucesso!',
        'A operação foi concluída com sucesso.',
        'success'
    );
});

// Alerta de Erro
document.getElementById('alertErro').addEventListener('click', function() {
    Swal.fire(
        'Erro!',
        'Algo deu errado, tente novamente.',
        'error'
    );
});

// Alerta de Aviso
document.getElementById('alertAviso').addEventListener('click', function() {
    Swal.fire(
        'Atenção!',
        'Verifique os dados informados.',
        'warning'
    );
});

// Alerta Informativo
document.getElementById('alertInfo').addEventListener('click', function() {
    Swal.fire(
        'Informação',
        'Este é um alerta de informação.',
        'info'
    );
});
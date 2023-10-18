$(document).ready(function () {
    const form = $('#form-tarefas');
    const linhaTarefas = $('#atualiza-tarefas');

    form.on('submit', function (e) {
        e.preventDefault();
        addLinha();
    });

    function addLinha() {
        const inputTarefasDiversas = $('#tarefas-diversas');
        const linha = $('<ul>').append($('<li>').text(inputTarefasDiversas.val()));
        linhaTarefas.append(linha);
        inputTarefasDiversas.val('');
    }

    $('#atualiza-tarefas').on('click', 'li', function () {
        $(this).toggleClass('riscado');
    });
});
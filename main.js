$(document).ready(function() {

   $('form').on('submit', function(e) {
    e.preventDefault();

    let nomeTarefa = $('#nome-tarefa').val();
    $('#lista-tarefas').append('<li>' + nomeTarefa + '</li>');
    $('#nome-tarefa').val('');
    

    $('#lista-tarefas').on('click', 'li', function() { 

    $(this).toggleClass('completed');

    })

   })

})
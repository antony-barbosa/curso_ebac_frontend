document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
      document.getElementById('mensagem').innerHTML = 'Formulário válido! B é maior que A.';
      document.getElementById('mensagem').style.color = 'green';
    } else {
      document.getElementById('mensagem').innerHTML = 'Formulário inválido! B deve ser maior que A.';
      document.getElementById('mensagem').style.color = 'red';
    }
  });
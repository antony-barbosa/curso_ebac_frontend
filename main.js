function adicionarContato() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;

    // Validar se os campos estão preenchidos
    if (!nome || !telefone) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Criar uma nova linha na tabela
    let table = document.getElementById('contatos');
    let row = table.insertRow(-1);

    // Adicionar células com os dados do contato
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;

    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
  }
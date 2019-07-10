var botaoAdicionar = document.querySelector('#adicionar-vendas');

botaoAdicionar.addEventListener('click', criarVendas);

function criarVendas(evento) {
  evento.preventDefault();

  var formulario = document.querySelector('#formulario');

  var vendas = pagarForm(formulario);
  var vendasTr = montaTr(vendas);
  vendasTr.classList.add('vendas');
  var erros = validaVendas(vendas);

  if (erros.length) {
    exibeMesagemErro(erros);
    return;
  }

  var table = document.querySelector('#tabela-vendas');
  table.appendChild(vendasTr);

  formulario.reset();
  limpaLista();
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('vendas');
  
    vendasTr.appendChild(montaTd(venadas.nome, 'info-nome'));
    vendasTr.appendChild(montaTd(vendas.availability, 'info-availability'));
    vendasTr.appendChild(montaTd(vendas.total, 'info-total'));
   
    return pacienteTr;
  }
  
  function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
  }
  
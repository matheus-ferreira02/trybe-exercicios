states = [
  { uf: "AC", nome: "Acre" },
  { uf: "AL", nome: "Alagoas" },
  { uf: "AP", nome: "Amapá" },
  { uf: "AM", nome: "Amazonas" },
  { uf: "BA", nome: "Bahia" },
  { uf: "CE", nome: "Ceará" },
  { uf: "DF", nome: "Distrito Federal" },
  { uf: "ES", nome: "Espirito Santo" },
  { uf: "GO", nome: "Goiás" },
  { uf: "MA", nome: "Maranhão" },
  { uf: "MS", nome: "Mato Grosso do Sul" },
  { uf: "MT", nome: "Mato Grosso" },
  { uf: "MG", nome: "Minas Gerais" },
  { uf: "PA", nome: "Pará" },
  { uf: "PB", nome: "Paraíba" },
  { uf: "PR", nome: "Paraná" },
  { uf: "PE", nome: "Pernambuco" },
  { uf: "PI", nome: "Piauí" },
  { uf: "RJ", nome: "Rio de Janeiro" },
  { uf: "RN", nome: "Rio Grande do Norte" },
  { uf: "RS", nome: "Rio Grande do Sul" },
  { uf: "RO", nome: "Rondônia" },
  { uf: "RR", nome: "Roraima" },
  { uf: "SC", nome: "Santa Catarina" },
  { uf: "SP", nome: "São Paulo" },
  { uf: "SE", nome: "Sergipe" },
  { uf: "TO", nome: "Tocantins" },
];

siglasState = [];

window.onload = () => {
  const dropDown = document.querySelector("#select-estado");
  for (let i in states) {
    const element = document.createElement("option");
    element.innerText = states[i].nome;
    element.value = states[i].uf;
    dropDown.appendChild(element);
  }
};

function montaCurriculo () {
  dados = {
    'nome': document.getElementById('input-nome').value,
    'email': document.getElementById('input-email').value,
    'cpf': document.getElementById('input-cpf').value,
    'endereco': document.getElementById('input-endereço').value,
    'cidade': document.getElementById('input-cidade').value,
    'estado': document.getElementById('select-estado').value,
    'tipo': document.querySelector('input[name="tipo"]:checked').value,
    'resumo': document.getElementById('resumo-curriculo').value,
    'cargo': document.getElementById('input-cargo').value,
    'descricao': document.getElementById('input-descricao').value,
    'dataInicio': document.getElementById('input-data').value,
  }
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  for (let i in dados) {
    const li = document.createElement('li');
    li.innerText = `${i}: ${dados[i]}`;
    ul.appendChild(li);
  }
  const p = document.createElement('p');
  p.innerText = 'Dados cadastrados: '
  document.body.appendChild(p)
  div.appendChild(ul);
  document.body.appendChild(div)
}

function cancelaSubmit(event) {
  console.log('cancelado')
  event.preventDefault();
  montaCurriculo();
};

buttonSubmit = document.querySelector('#submit');
buttonSubmit.addEventListener('click', cancelaSubmit);

function limpa() {
  const div = document.querySelector('div');
  const p = document.querySelector('p');
  div.remove();
  p.remove();
}

buttonClear = document.querySelector('#reset');
buttonClear.addEventListener('click', limpa);
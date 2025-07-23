// Aula 06 – Projeto Mini
// IMPORTANTE: copie daqui as funções de "../aula-05-fetch-apis/script.js"

const main = document.querySelector('main');

// Exemplo: Mini To-Do List
const tarefas = [];

const inputTarefa = document.createElement('input');
inputTarefa.placeholder = 'Nova tarefa';
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
main.appendChild(inputTarefa);
main.appendChild(btnAdd);

const ul = document.createElement('ul');
main.appendChild(ul);

btnAdd.addEventListener('click', () => {
  const texto = inputTarefa.value.trim();
  if (!texto) {
    main.append(' Digite uma tarefa!');
    return;
  }
  tarefas.push(texto);
  renderTarefas();
  inputTarefa.value = '';
});

function renderTarefas() {
  ul.innerHTML = '';
  tarefas.forEach((t, i) => {
    const li = document.createElement('li');
    li.textContent = t;
    // Botão remover
    const btnRem = document.createElement('button');
    btnRem.textContent = 'Remover';
    btnRem.onclick = () => {
      tarefas.splice(i, 1);
      renderTarefas();
    };
    li.appendChild(btnRem);
    ul.appendChild(li);
  });
}

// Exercício 1
// Marcar tarefa como concluída
// ...adicione um checkbox ao lado de cada tarefa...

// Exercício 2
// Salvar tarefas no localStorage
// ...adicione lógica para salvar e carregar...

// Desafio 1
// Adicionar edição de tarefa
// ...adicione botão e lógica de edição...

// Desafio 2
// Adicionar filtro de tarefas concluídas
// ...adicione filtro por status...

// Exportando para próxima aula
export { main, tarefas };

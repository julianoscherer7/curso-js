// Projeto Final – Agenda de Contatos
// IMPORTANTE: copie daqui as funções de "../aula-06-projeto-mini/script.js"

const main = document.querySelector('main');

// Estrutura de contatos
let contatos = JSON.parse(localStorage.getItem('contatos')) || [];

// Função para renderizar contatos
function renderContatos() {
  main.innerHTML = '';
  const form = document.createElement('form');
  form.className = 'fade-in';
  form.innerHTML = `
    <input name="nome" placeholder="Nome" required>
    <input name="telefone" placeholder="Telefone" required>
    <input name="email" placeholder="E-mail" type="email" required>
    <button type="submit">Adicionar</button>
  `;
  main.appendChild(form);

  const ul = document.createElement('ul');
  ul.className = 'slide-in';
  contatos.forEach((c, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${c.nome}</b> – ${c.telefone} – ${c.email}`;
    // Botão remover
    const btnRem = document.createElement('button');
    btnRem.textContent = 'Remover';
    btnRem.onclick = () => {
      contatos.splice(i, 1);
      salvarContatos();
      renderContatos();
    };
    li.appendChild(btnRem);
    ul.appendChild(li);
  });
  main.appendChild(ul);

  form.onsubmit = e => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const email = form.email.value.trim();
    if (!nome || !telefone || !email) {
      alert('Preencha todos os campos!');
      return;
    }
    contatos.push({ nome, telefone, email });
    salvarContatos();
    renderContatos();
    form.reset();
  };
}

function salvarContatos() {
  localStorage.setItem('contatos', JSON.stringify(contatos));
}

// Inicialização
renderContatos();

// Bônus: jQuery para efeito (opcional)
// if (window.$) {
//   $("ul li").hide().fadeIn(700);
// }

// Exportando para revisão
export { main, contatos };

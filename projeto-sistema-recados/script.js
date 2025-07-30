const form = document.getElementById('form-recado');
const listaRecados = document.getElementById('lista-recados');

let recados = JSON.parse(localStorage.getItem('recados')) || [];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const quem = document.getElementById('quem').value.trim();
  const texto = document.getElementById('texto').value.trim();
  const destinatario = document.getElementById('destinatario').value.trim();

  if (!quem || !texto || !destinatario) {
    alert("Preencha todos os campos!");
    return;
  }

  const novoRecado = {
    id: Date.now(),
    quem,
    texto,
    destinatario,
    dataHora: new Date().toLocaleString()
  };

  recados.push(novoRecado);
  localStorage.setItem('recados', JSON.stringify(recados));
  form.reset();
  renderizarRecados();
  
  // Efeito jQuery
  $('#lista-recados li').first().hide().fadeIn(500);
});

function renderizarRecados() {
  listaRecados.innerHTML = '';

  recados.forEach(recado => {
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-start';
    item.innerHTML = `
      <div>
        <strong>${recado.quem}</strong> → <em>${recado.destinatario}</em><br>
        ${recado.texto}<br>
        <small class="text-muted">${recado.dataHora}</small>
      </div>
      <button class="btn btn-danger btn-sm" onclick="removerRecado(${recado.id})">Remover</button>
    `;
    listaRecados.appendChild(item);
  });
}

function removerRecado(id) {
  const item = $(`#lista-recados li:has(button[onclick="removerRecado(${id})"])`);
  item.fadeOut(400, function () {
    recados = recados.filter(r => r.id !== id);
    localStorage.setItem('recados', JSON.stringify(recados));
    renderizarRecados();
  });
}

renderizarRecados();

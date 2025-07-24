# Aula 03 – Manipulação do DOM e Eventos

Nesta aula, vamos reutilizar:
- Funções de saudação, paridade e soma das aulas anteriores.

## Objetivos de aprendizagem
- Selecionar e manipular elementos do DOM.
- Adicionar e remover conteúdo dinamicamente.
- Lidar com eventos de clique e input.

## Conteúdo
- `document.querySelector`, `document.createElement`
- `addEventListener`
- Manipulação de texto e atributos

## Recapitulação da aula anterior
- Funções utilitárias para saudação, soma, paridade, maior número e voto.


 Principais tipos de eventos que podem ser usados com addEventListener
🖱️ Eventos de Mouse
Evento	Descrição
click	Clique com botão principal
dblclick	Clique duplo
mousedown	Pressionar botão do mouse
mouseup	Soltar botão do mouse
mousemove	Movimento do mouse
mouseenter	Mouse entra no elemento (sem bubble)
mouseleave	Mouse sai do elemento (sem bubble)
mouseover	Mouse entra (com bubble)
mouseout	Mouse sai (com bubble)
contextmenu	Clique com botão direito
wheel	Roda do mouse

⌨️ Eventos de Teclado
Evento	Descrição
keydown	Tecla pressionada
keyup	Tecla solta
keypress	Tecla pressionada (obsoleto)

📄 Eventos de Formulário
Evento	Descrição
submit	Formulário enviado
change	Valor de <input>, <select> etc. mudou
input	Qualquer mudança em campos de texto
focus	Elemento recebe foco
blur	Elemento perde o foco
reset	Formulário resetado
invalid	Campo inválido

🌐 Eventos de Janela (Window)
Evento	Descrição
load	Página completamente carregada
resize	Janela redimensionada
scroll	Scroll na página ou elemento
unload	Página sendo descarregada (obsoleto)
beforeunload	Antes da página ser descarregada
error	Erro de carregamento

📦 Eventos de Drag and Drop
Evento	Descrição
drag	Enquanto arrasta
dragstart	Início do arraste
dragend	Fim do arraste
dragenter	Arrastando entra em área
dragover	Enquanto está sobre área
dragleave	Sai da área de drop
drop	Solta o item na área

📦 Eventos de Clipboard
Evento	Descrição
copy	Quando algo é copiado
cut	Quando algo é cortado
paste	Quando algo é colado

📱 Eventos de Touch (para dispositivos móveis)
Evento	Descrição
touchstart	Dedo toca na tela
touchmove	Dedo desliza na tela
touchend	Dedo sai da tela
touchcancel	Interrupção do toque

🧠 Outros eventos úteis
Evento	Descrição
animationstart	Animação CSS começou
animationend	Animação CSS terminou
transitionend	Transição CSS terminou
DOMContentLoaded	HTML foi completamente carregado
visibilitychange	Aba ficou visível ou oculta

## Exercícios guiados

### Exercício 1
**Enunciado:**
Adicione um botão na página que, ao ser clicado, mostra uma saudação usando a função da aula anterior.

**Como testar:**
Clique no botão e veja se aparece a mensagem.

**Dica:**
Se não funcionar, confira se o botão existe e se o evento está correto.

---

### Exercício 2
**Enunciado:**
Crie um campo de input e um botão. Ao clicar, mostre se o número digitado é par ou ímpar.

**Como testar:**
Digite diferentes números e clique para ver o resultado.

**Dica:**
Se não aparece nada, confira se está pegando o valor do input corretamente.

---

### Exercício 3
**Enunciado:**
Adicione dois inputs e um botão para somar os valores usando a função `somar`.

**Como testar:**
Digite valores e clique para ver a soma.

**Dica:**
Se der erro, confira se está convertendo para número.

---

## Desafios extras
- Adicione um botão que limpa todos os resultados da tela.
- Crie um evento para mostrar uma mensagem quando o mouse passar sobre um elemento.

## Links de referência
- [MDN – DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)
- [MDN – Eventos](https://developer.mozilla.org/pt-BR/docs/Web/Events)

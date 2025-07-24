// Configuração do Toastr
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

// Variáveis globais
const logPanel = $("#log-panel");
let gameScore = 0;
let gameActive = false;
let progressInterval = null;
let currentProgress = 0;

// Mapeamento de eventos para categorias
const eventCategories = {
    // Mouse events
    'click': 'mouse', 'dblclick': 'mouse', 'mousedown': 'mouse', 'mouseup': 'mouse',
    'mouseover': 'mouse', 'mouseout': 'mouse', 'mouseenter': 'mouse', 'mouseleave': 'mouse',
    'mousemove': 'mouse', 'contextmenu': 'mouse',
    
    // Keyboard events
    'keydown': 'keyboard', 'keyup': 'keyboard', 'keypress': 'keyboard',
    
    // Form events
    'focus': 'form', 'blur': 'form', 'input': 'form', 'change': 'form',
    'submit': 'form', 'reset': 'form', 'invalid': 'form', 'toggle': 'form',
    
    // Media events
    'canplay': 'media', 'canplaythrough': 'media', 'loadeddata': 'media', 'loadedmetadata': 'media',
    'play': 'media', 'playing': 'media', 'pause': 'media', 'ended': 'media',
    'seeking': 'media', 'seeked': 'media', 'progress': 'media', 'timeupdate': 'media',
    'ratechange': 'media', 'volumechange': 'media', 'durationchange': 'media',
    'waiting': 'media', 'stalled': 'media', 'suspend': 'media', 'emptied': 'media', 'error': 'media',
    
    // Drag & Drop events
    'dragstart': 'dragdrop', 'drag': 'dragdrop', 'dragenter': 'dragdrop', 'dragleave': 'dragdrop',
    'dragover': 'dragdrop', 'drop': 'dragdrop', 'dragend': 'dragdrop',
    'copy': 'dragdrop', 'cut': 'dragdrop', 'paste': 'dragdrop',
    'selectionchange': 'dragdrop', 'selectstart': 'dragdrop',
    
    // Touch events
    'touchstart': 'touch', 'touchmove': 'touch', 'touchend': 'touch', 'touchcancel': 'touch',
    
    // Pointer events
    'pointerdown': 'touch', 'pointermove': 'touch', 'pointerup': 'touch',
    'pointerenter': 'touch', 'pointerleave': 'touch', 'pointerover': 'touch', 'pointerout': 'touch',
    'pointercancel': 'touch', 'gotpointercapture': 'touch', 'lostpointercapture': 'touch',
    
    // Animation events
    'animationstart': 'animation', 'animationiteration': 'animation', 'animationend': 'animation', 'animationcancel': 'animation',
    
    // Transition events
    'transitionrun': 'transition', 'transitionstart': 'transition', 'transitioncancel': 'transition', 'transitionend': 'transition',
    
    // History events
    'popstate': 'history', 'pushstate': 'history', 'online': 'history', 'offline': 'history',
    
    // Other events
    'DOMContentLoaded': 'other', 'load': 'other', 'beforeunload': 'other', 'unload': 'other',
    'visibilitychange': 'other', 'resize': 'other', 'close': 'other', 'slotchange': 'other', 'cuechange': 'other'
};

// Função principal de logging
function addLogEntry(eventName, targetElement, details = {}) {
    const timestamp = new Date().toLocaleTimeString("pt-BR", { hour12: false });
    let logMessage = `[${timestamp}] Evento: ${eventName}`;

    let targetInfo = "";
    if (targetElement) {
        if (targetElement.tagName) {
            targetInfo += targetElement.tagName.toLowerCase();
        } else if (targetElement === window) {
            targetInfo += "window";
        } else if (targetElement === document) {
            targetInfo += "document";
        }
        
        if (targetElement.id) {
            targetInfo += `#${targetElement.id}`;
        }
        if (targetElement.className && typeof targetElement.className === 'string') {
            const classList = targetElement.className.split(" ").filter(c => c);
            if (classList.length > 0) {
                targetInfo += `.${classList[0]}`;
            }
        }
    }
    if (targetInfo) {
        logMessage += `, Alvo: ${targetInfo}`;
    }

    for (const key in details) {
        if (details.hasOwnProperty(key)) {
            let value = details[key];
            if (typeof value === "object" && value !== null) {
                value = JSON.stringify(value);
            }
            logMessage += `, ${key}: ${value}`;
        }
    }

    const category = eventCategories[eventName] || 'other';
    const logEntry = $(`<div class="log-entry log-${category}">`).text(logMessage);
    logPanel.append(logEntry);
    logPanel.scrollTop(logPanel[0].scrollHeight);
}

// Função para limpar logs
function clearLogs() {
    logPanel.empty();
    addLogEntry("logs_cleared", document, { action: "manual_clear" });
}

// Web Component Definition
class MyComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const template = document.getElementById("my-component-template").content;
        shadowRoot.appendChild(template.cloneNode(true));

        shadowRoot.querySelectorAll("slot").forEach(slot => {
            slot.addEventListener("slotchange", (event) => {
                addLogEntry("slotchange", slot, { 
                    slotName: slot.name || "default", 
                    assignedNodes: slot.assignedNodes().length 
                });
                toastr.info(`Slot '${slot.name || "default"}' alterado!`);
            });
        });
    }
}

// Registrar Web Component
customElements.define("my-component", MyComponent);

// Event Listeners - Document Ready
$(document).ready(function() {
    addLogEntry("DOMContentLoaded", document);
    toastr.success("DOM pronto!");
    
    // Mostrar modal de boas-vindas
    setTimeout(() => {
        $("#welcomeModal").modal("show");
    }, 500);
    
    // Atualizar dimensões da janela
    updateWindowDimensions();
    
    // Carregar conteúdo inicial da navegação
    loadContent(window.location.pathname === "/" ? "/home" : window.location.pathname);
    
    // Verificar status de conectividade inicial
    updateConnectionStatus();
});

// Event Listeners - Window Load
$(window).on("load", function() {
    addLogEntry("load", window);
    toastr.success("Tudo carregado!");
});

// Event Listeners - Before Unload
$(window).on("beforeunload", function(event) {
    addLogEntry("beforeunload", window);
    // Nota: Navegadores modernos podem não mostrar mensagens personalizadas
});

// Event Listeners - Unload
$(window).on("unload", function() {
    addLogEntry("unload", window);
});

// Event Listeners - Visibility Change
$(document).on("visibilitychange", function() {
    if (document.hidden) {
        addLogEntry("visibilitychange", document, { state: "hidden" });
        toastr.info("Aba oculta!");
    } else {
        addLogEntry("visibilitychange", document, { state: "visible" });
        toastr.info("Aba visível!");
    }
});

// Event Listeners - Window Resize
$(window).on("resize", function() {
    updateWindowDimensions();
});

function updateWindowDimensions() {
    const width = $(window).width();
    const height = $(window).height();
    $("#window-dimensions").text(`Largura: ${width}px, Altura: ${height}px`);
    addLogEntry("resize", window, { width: width, height: height });
}

// Event Listeners - Header e Menu
$(".navbar-toggler").on("click", function() {
    addLogEntry("click", this, { action: "toggle_menu" });
});

$("#navbarNav").on("transitionrun transitionstart transitioncancel transitionend", function(event) {
    addLogEntry(event.type, event.target, { propertyName: event.originalEvent.propertyName });
});

$(".nav-item, .dropdown-item, .nav-link").on("mouseenter mouseleave mouseover mouseout", function(event) {
    addLogEntry(event.type, event.target);
});

// Event Listeners - Modal de Boas-vindas
$("#welcomeModal").on("show.bs.modal hide.bs.modal shown.bs.modal hidden.bs.modal", function(event) {
    addLogEntry(event.type.replace('.bs.modal', ''), this, { modal: "welcome" });
});

$(".animated-element").on("animationstart animationiteration animationend animationcancel", function(event) {
    addLogEntry(event.type, event.target, { animationName: event.originalEvent.animationName });
});

// Event Listeners - Formulários
$("#registrationForm input, #registrationForm select, #registrationForm textarea").on("focus blur input change invalid", function(event) {
    const value = $(this).val();
    addLogEntry(event.type, event.target, { value: value ? value.substring(0, 20) + (value.length > 20 ? "..." : "") : "" });
});

$("#registrationForm").on("submit", function(event) {
    event.preventDefault();
    addLogEntry(event.type, event.target);

    if (this.checkValidity()) {
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        addLogEntry("formdata_collected", this, { fields: Object.keys(data).length });
        toastr.success("Formulário enviado com sucesso!");
        $(this).addClass("was-validated");
    } else {
        toastr.error("Por favor, preencha todos os campos obrigatórios.");
        $(this).addClass("was-validated");
    }
});

$("#registrationForm").on("reset", function(event) {
    addLogEntry(event.type, event.target);
    toastr.warning("Formulário resetado.");
    $(this).removeClass("was-validated");
});

$("details").on("toggle", function(event) {
    addLogEntry(event.type, event.target, { open: $(this).prop("open") });
});

// Event Listeners - Mídia
const mediaEvents = [
    "canplay", "canplaythrough", "loadeddata", "loadedmetadata",
    "play", "playing", "pause", "ended",
    "seeking", "seeked", "progress", "timeupdate",
    "ratechange", "volumechange", "durationchange",
    "waiting", "stalled", "suspend", "emptied", "error"
];

$("#videoPlayer, #audioPlayer").each(function() {
    const mediaElement = this;
    mediaEvents.forEach(eventName => {
        $(mediaElement).on(eventName, function(event) {
            const details = {};
            if (mediaElement.duration && !isNaN(mediaElement.duration)) details.duration = mediaElement.duration.toFixed(2);
            if (mediaElement.currentTime) details.currentTime = mediaElement.currentTime.toFixed(2);
            if (mediaElement.volume !== undefined) details.volume = mediaElement.volume.toFixed(2);
            if (mediaElement.playbackRate) details.playbackRate = mediaElement.playbackRate.toFixed(2);
            if (mediaElement.error) details.error = mediaElement.error.code;

            addLogEntry(event.type, mediaElement, details);
            
            // Mostrar toast apenas para eventos importantes
            if (['play', 'pause', 'ended', 'error'].includes(event.type)) {
                toastr.info(`Mídia: ${event.type}`);
            }
        });
    });
});

// Controles de mídia personalizados
$("#playBtn").on("click", function() {
    const video = document.getElementById("videoPlayer");
    const audio = document.getElementById("audioPlayer");
    video.play();
    audio.play();
    addLogEntry("manual_play", this);
});

$("#pauseBtn").on("click", function() {
    const video = document.getElementById("videoPlayer");
    const audio = document.getElementById("audioPlayer");
    video.pause();
    audio.pause();
    addLogEntry("manual_pause", this);
});

$("#stopBtn").on("click", function() {
    const video = document.getElementById("videoPlayer");
    const audio = document.getElementById("audioPlayer");
    video.pause();
    audio.pause();
    video.currentTime = 0;
    audio.currentTime = 0;
    addLogEntry("manual_stop", this);
});

// Event Listeners - Drag & Drop
const dropZone = $("#drop-zone");

dropZone.on("click", function() {
    $("#fileInput").click();
});

$("#fileInput").on("change", function(event) {
    const files = event.target.files;
    addLogEntry("file_selected", this, { fileCount: files.length });
    if (files.length > 0) {
        toastr.success(`${files.length} arquivo(s) selecionado(s)`);
    }
});

dropZone.on("dragenter dragover", function(event) {
    event.preventDefault();
    dropZone.addClass("hover");
    addLogEntry(event.type, event.target);
});

dropZone.on("dragleave dragend", function(event) {
    dropZone.removeClass("hover");
    addLogEntry(event.type, event.target);
});

dropZone.on("drop", function(event) {
    event.preventDefault();
    dropZone.removeClass("hover");
    const files = event.originalEvent.dataTransfer.files;
    addLogEntry(event.type, event.target, { files: files.length });
    toastr.success(`${files.length} arquivo(s) solto(s)!`);
});

// Event Listeners - Conteúdo Editável
$("#editable-content").on("copy cut paste", function(event) {
    addLogEntry(event.type, event.target);
    toastr.info(`Edição: ${event.type}`);
});

$(document).on("selectionchange", function(event) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && selection.toString().length > 0) {
        addLogEntry("selectionchange", document, { selectedText: selection.toString().substring(0, 20) + "..." });
    }
});

$("#editable-content").on("selectstart", function(event) {
    addLogEntry(event.type, event.target);
});

// Event Listeners - Teclado (Global)
$(document).on("keydown keypress keyup", function(event) {
    // Evitar spam de logs para teclas comuns
    if (!['F5', 'F12', 'Tab', 'Shift', 'Control', 'Alt'].includes(event.key)) {
        addLogEntry(event.type, document, { 
            key: event.key, 
            keyCode: event.keyCode,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey
        });
    }
});

// Event Listeners - Game/Quiz
$("#gameButton").on("click", function() {
    if (!gameActive) {
        startGame();
    } else {
        endGame();
    }
});

$("#game-area").on("mousedown mouseup click dblclick", function(event) {
    addLogEntry(event.type, event.target, { 
        clientX: event.clientX, 
        clientY: event.clientY,
        gameActive: gameActive
    });
});

$("#game-area").on("contextmenu", function(event) {
    event.preventDefault();
    addLogEntry(event.type, event.target, { clientX: event.clientX, clientY: event.clientY });
    toastr.info("Menu de contexto customizado!");
});

// Touch Events para Game Area
$("#game-area").on("touchstart touchmove touchend touchcancel", function(event) {
    const touches = event.originalEvent.touches;
    addLogEntry(event.type, event.target, { 
        touchCount: touches.length, 
        firstTouchX: touches[0]?.clientX, 
        firstTouchY: touches[0]?.clientY 
    });
});

// Pointer Events para Game Area
$("#game-area").on("pointerdown pointermove pointerup pointerenter pointerleave pointerover pointerout pointercancel gotpointercapture lostpointercapture", function(event) {
    addLogEntry(event.type, event.target, { 
        pointerType: event.originalEvent.pointerType, 
        clientX: event.clientX, 
        clientY: event.clientY 
    });
});

// Funções do Game
function startGame() {
    gameActive = true;
    gameScore = 0;
    updateScore();
    $("#gameButton").text("Parar Jogo").removeClass("btn-success").addClass("btn-danger");
    createGameTarget();
    addLogEntry("game_started", document.getElementById("game-area"));
    toastr.success("Jogo iniciado!");
}

function endGame() {
    gameActive = false;
    $("#gameButton").text("Iniciar Jogo").removeClass("btn-danger").addClass("btn-success");
    $("#game-targets").empty();
    addLogEntry("game_ended", document.getElementById("game-area"), { finalScore: gameScore });
    toastr.info(`Jogo finalizado! Pontuação: ${gameScore}`);
}

function createGameTarget() {
    if (!gameActive) return;
    
    const gameArea = $("#game-area");
    const target = $("<div class='game-target'></div>");
    const maxX = gameArea.width() - 50;
    const maxY = gameArea.height() - 50;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    target.css({
        left: x + "px",
        top: y + "px"
    });
    
    target.on("click", function(event) {
        event.stopPropagation();
        gameScore += 10;
        updateScore();
        $(this).remove();
        addLogEntry("target_hit", this, { score: gameScore, x: x, y: y });
        toastr.success("+10 pontos!");
        
        setTimeout(createGameTarget, 500);
    });
    
    $("#game-targets").append(target);
    
    // Remove target after 3 seconds if not clicked
    setTimeout(() => {
        if (target.parent().length) {
            target.remove();
            if (gameActive) {
                setTimeout(createGameTarget, 500);
            }
        }
    }, 3000);
}

function updateScore() {
    $("#score").text(gameScore);
}

// Event Listeners - Navegação e Histórico
$(".nav-link-custom").on("click", function(event) {
    event.preventDefault();
    const path = $(this).data("path");
    history.pushState({ path: path }, "", path);
    loadContent(path);
    addLogEntry("pushstate", window, { path: path });
});

$(window).on("popstate", function(event) {
    const state = event.originalEvent.state;
    const path = state ? state.path : "/home";
    loadContent(path);
    addLogEntry("popstate", window, { path: path });
});

function loadContent(path) {
    let content = "";
    switch(path) {
        case "/home": 
            content = "🏠 <strong>Bem-vindo à página inicial!</strong><br>Esta é a seção principal da demonstração de eventos DOM."; 
            break;
        case "/about": 
            content = "ℹ️ <strong>Sobre esta demonstração</strong><br>Esta página foi criada para demonstrar o uso abrangente de eventos DOM nativos."; 
            break;
        case "/contact": 
            content = "📧 <strong>Entre em contato</strong><br>Esta seção simula uma página de contato com navegação SPA."; 
            break;
        case "/services": 
            content = "🛠️ <strong>Nossos Serviços</strong><br>Demonstração de eventos, logging e interatividade web."; 
            break;
        default: 
            content = "❌ <strong>Página não encontrada</strong><br>O caminho solicitado não existe.";
    }
    $("#content-area").html(content);
    addLogEntry("content_loaded", document.getElementById("content-area"), { path: path });
}

// Event Listeners - Conectividade
$(window).on("online", function() {
    addLogEntry("online", window);
    updateConnectionStatus();
    toastr.success("Você está online!");
});

$(window).on("offline", function() {
    addLogEntry("offline", window);
    updateConnectionStatus();
    toastr.error("Você está offline!");
});

function updateConnectionStatus() {
    const status = navigator.onLine ? "Online" : "Offline";
    const badgeClass = navigator.onLine ? "bg-success" : "bg-danger";
    $("#connection-status").text(status).removeClass("bg-success bg-danger").addClass(badgeClass);
}

// Event Listeners - Componentes Avançados
const myDialog = document.getElementById("myDialog");

$("#openDialogBtn").on("click", function() {
    myDialog.showModal();
    addLogEntry("dialog_opened", myDialog);
});

$("#closeDialogBtn").on("click", function() {
    myDialog.close();
});

$(myDialog).on("close", function(event) {
    addLogEntry(event.type, myDialog);
    toastr.info("Diálogo fechado!");
});

// Canvas e Gráfico de Progresso
const ctx = document.getElementById("myChart").getContext("2d");

function drawChart(progress) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Background
    ctx.fillStyle = "#f8f9fa";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Progress bar background
    ctx.fillStyle = "#e9ecef";
    ctx.fillRect(20, ctx.canvas.height/2 - 20, ctx.canvas.width - 40, 40);
    
    // Progress bar fill
    const progressWidth = (ctx.canvas.width - 40) * (progress / 100);
    ctx.fillStyle = "#007bff";
    ctx.fillRect(20, ctx.canvas.height/2 - 20, progressWidth, 40);
    
    // Text
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`${progress.toFixed(0)}%`, ctx.canvas.width / 2, ctx.canvas.height / 2 + 5);
}

$("#startProgress").on("click", function() {
    if (progressInterval) return;
    
    currentProgress = 0;
    progressInterval = setInterval(() => {
        currentProgress += 2;
        drawChart(currentProgress);
        addLogEntry("progress_update", document.getElementById("myChart"), { progress: currentProgress });
        
        if (currentProgress >= 100) {
            clearInterval(progressInterval);
            progressInterval = null;
            toastr.success("Progresso completo!");
        }
    }, 100);
    
    addLogEntry("progress_started", this);
    toastr.info("Progresso iniciado!");
});

$("#stopProgress").on("click", function() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
        addLogEntry("progress_stopped", this, { stoppedAt: currentProgress });
        toastr.warning("Progresso parado!");
    }
});

// Canvas Mouse Events
$("#myChart").on("mousemove click", function(event) {
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    addLogEntry(event.type, this, { canvasX: x.toFixed(0), canvasY: y.toFixed(0) });
});

// Event Listeners - Filtros de Log
$(".log-filters button").on("click", function() {
    $(".log-filters button").removeClass("active btn-primary").addClass("btn-outline-light");
    $(this).addClass("active btn-primary").removeClass("btn-outline-light");

    const filter = $(this).data("filter");
    $(".log-entry").hide();
    if (filter === "all") {
        $(".log-entry").show();
    } else {
        $(`.log-${filter}`).show();
    }
    
    addLogEntry("log_filter_changed", this, { filter: filter });
});

// Botão de limpar logs
$("#clearLogs").on("click", function() {
    clearLogs();
    toastr.info("Logs limpos!");
});

// Inicializar gráfico
drawChart(0);

// Log inicial
addLogEntry("script_loaded", document, { timestamp: new Date().toISOString() });


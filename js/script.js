// Cuidar de Perto - script compartilhado por todas as páginas

(function () {
  var raiz = document.documentElement;

  function ler(chave) {
    try { return localStorage.getItem(chave); } catch (e) { return null; }
  }
  function gravar(chave, valor) {
    try { localStorage.setItem(chave, valor); } catch (e) { /* sem armazenamento: segue sem salvar */ }
  }

  // Tamanho da letra: 0 (normal), 1 (grande), 2 (maior)
  var nivelFonte = parseInt(ler("fonte") || "0", 10);
  function aplicarFonte() {
    raiz.setAttribute("data-fonte", String(nivelFonte));
    gravar("fonte", String(nivelFonte));
  }
  aplicarFonte();

  var menos = document.getElementById("fonte-menos");
  var mais = document.getElementById("fonte-mais");
  if (menos) {
    menos.addEventListener("click", function () {
      nivelFonte = Math.max(0, nivelFonte - 1);
      aplicarFonte();
    });
  }
  if (mais) {
    mais.addEventListener("click", function () {
      nivelFonte = Math.min(2, nivelFonte + 1);
      aplicarFonte();
    });
  }

  // Alto contraste
  var botaoContraste = document.getElementById("contraste");
  function aplicarContraste(ligado) {
    if (ligado) { raiz.setAttribute("data-contraste", "alto"); }
    else { raiz.removeAttribute("data-contraste"); }
    if (botaoContraste) { botaoContraste.setAttribute("aria-pressed", String(ligado)); }
    gravar("contraste", ligado ? "alto" : "normal");
  }
  aplicarContraste(ler("contraste") === "alto");
  if (botaoContraste) {
    botaoContraste.addEventListener("click", function () {
      aplicarContraste(raiz.getAttribute("data-contraste") !== "alto");
    });
  }

  // Data de hoje, para ajudar na orientação do dia
  var hoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });
  var campos = document.querySelectorAll("[data-hoje]");
  for (var i = 0; i < campos.length; i++) { campos[i].textContent = hoje; }

  // Progresso das tarefas (página Meu dia)
  var tarefas = document.querySelectorAll(".tarefa input");
  var barra = document.getElementById("progresso");
  var texto = document.getElementById("progresso-texto");
  function atualizarProgresso() {
    var feitas = 0;
    for (var j = 0; j < tarefas.length; j++) { if (tarefas[j].checked) { feitas++; } }
    if (barra) { barra.value = feitas; barra.max = tarefas.length; }
    if (texto) { texto.textContent = feitas + " de " + tarefas.length + " tarefas feitas hoje"; }
  }
  if (tarefas.length) {
    for (var k = 0; k < tarefas.length; k++) {
      tarefas[k].addEventListener("change", atualizarProgresso);
    }
    atualizarProgresso();
    // Alguns navegadores restauram as caixas marcadas só depois do carregamento
    window.addEventListener("load", atualizarProgresso);
    window.addEventListener("pageshow", atualizarProgresso);
  }

  // Formulários de exemplo: não enviam dados, só mostram uma confirmação
  var formularios = document.querySelectorAll(".formulario-demo");
  for (var m = 0; m < formularios.length; m++) {
    formularios[m].addEventListener("submit", function (evento) {
      evento.preventDefault();
      var aviso = this.querySelector("[role='status']");
      if (aviso) { aviso.textContent = "Pronto! Este site é um exemplo e não guarda nem envia os dados."; }
    });
  }
  // Controle deslizante: mostra o valor escolhido
  var deslizantes = document.querySelectorAll("input[type='range'][data-saida]");
  for (var n = 0; n < deslizantes.length; n++) {
    deslizantes[n].addEventListener("input", function () {
      var saida = document.getElementById(this.getAttribute("data-saida"));
      if (saida) { saida.textContent = this.value; }
    });
  }
})();
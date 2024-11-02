function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const atividade = document.getElementById("atividade").value;
  const mensagemErro = document.getElementById("mensagemErro");

  if (!nome || !altura || !peso || !atividade) {
    mensagemErro.textContent = "Por favor, preencha todos os campos.";
  } else {
    mensagemErro.textContent = "";
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("resultScreen").style.display = "flex";
  }
}

function acessarReceitas() {
  window.location.href = "pagina-receitas.html"; // A nova página que você vai criar
}

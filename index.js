function abrirModal(id) {
  const conteudo = modalTextos[id] || "Conteúdo não encontrado.";
  document.getElementById('modal-texto').innerText = conteudo;
  document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    fecharModal();
  }
}


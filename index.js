var oldText = '';
var buttonAbrirModal = document.getElementById('abrir-modal');
var buttonFecharModal = document.getElementById('fechar-modal');
var buttonTrocarTexto = document.getElementById('trocar-texto');
var modal = document.getElementById('modal-texto');

buttonAbrirModal.onclick = function () {
  document.getElementById('modal-texto').style.display = 'block';
};
buttonFecharModal.onclick = function () {
  document.getElementById('modal-texto').style.display = 'none';
};
buttonTrocarTexto.onclick = function (e) {
  oldText = document.getElementById('text').value;
  console.log(oldText);
  if (document.getElementById('custom-text').value == '') {
    document.getElementById('text').innerText = 'Essa é a minha modal';
  } else {
    document.getElementById('text').innerText =
      document.getElementById('custom-text').value;
    console.log(document.getElementById('custom-text'));
  }
};
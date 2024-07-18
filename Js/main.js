function AbrirMenu() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('abrir')) {
      menuMobile.classList.remove('abrir');
  } else {
      menuMobile.classList.add('abrir');
  }
}
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('abrir')) {
      menuMobile.classList.remove('abrir');
      document.querySelector('.icone').src = "./Imagens/Icone-menu.svg";
  } else {
      menuMobile.classList.add('abrir');
      document.querySelector('.icone').src = "./Imagens/Icone-menu-fechar.svg";
  }
}
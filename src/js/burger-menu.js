const refs = {
  openBtn: document.getElementById('js-open-burger-menu'),
  closeBtn: document.getElementById('js-close-burger-menu'),
  wrapBurgMenu: document.getElementById('wrap__burger-menu'),
  themeDiv: document.getElementById('js-theme'),
};

refs.openBtn.addEventListener('click', onOpenBurgerMenu);
refs.closeBtn.addEventListener('click', onCloseBurgerMenu);

function onOpenBurgerMenu(e) {
  refs.wrapBurgMenu.classList.add('open');
  refs.themeDiv.classList.remove('close');
}

function onCloseBurgerMenu(e) {
  refs.wrapBurgMenu.classList.remove('open');
  refs.themeDiv.classList.add('close');
}

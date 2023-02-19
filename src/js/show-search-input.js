const refs = {
  search: document.getElementById('js-search'),
  label: document.getElementById('js-label-seaarch'),
};

refs.search.addEventListener('click', onToggleClass);

function onToggleClass(e) {
  refs.label.classList.remove('show');
}

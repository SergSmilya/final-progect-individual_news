const changeThemeBtn = document.querySelector('.switch-checkbox');
const bodyTheme = document.querySelector('body');
const themeDarkEl = document.querySelector('.theme__dark');
const themeLightEl = document.querySelector('.theme__light');

changeThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  bodyTheme.classList.toggle('darkMode');
  themeDarkEl.classList.toggle('opacityForDark');
  themeLightEl.classList.toggle('opacityForDark');
  // localStorage.setItem('theme', 'dark');
  if (localStorage.getItem('theme') !== 'dark') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
  // addDarkClassToHTML();
}

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      bodyTheme.classList.add('darkMode');
      changeThemeBtn.checked = true;
    }
    // else {
    //   bodyTheme.classList.remove('theme-dark');
    // }
  } catch (err) {}
}

addDarkClassToHTML();

export { changeTheme, addDarkClassToHTML };

// const refs = {
//   bodyEl: document.querySelector('body'),
//   themeToggleEl: document.getElementById('js-theme-toggle'),
//   iconSunEl: document.querySelector('.theme__icon--son'),
//   iconMoonEl: document.querySelector('.theme__icon--moon'),
// };

// refs.themeToggleEl.addEventListener('click', onChangeTheme);

// if (refs.themeToggleEl.checked) refs.iconSunEl.classList.add('active');

// function onChangeTheme(e) {
//   //   refs.bodyEl.classList.add('dark-mode');

//   if (!refs.themeToggleEl.checked) {
//     refs.iconSunEl.classList.remove('active');
//     refs.iconMoonEl.classList.add('active');
//   } else {
//     refs.iconSunEl.classList.add('active');
//     refs.iconMoonEl.classList.remove('active');
//   }
// }

// export { refs };

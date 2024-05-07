const hamburguerBtn = document.querySelector(`.hamburguer`);

document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  eventListeners();
}

function eventListeners() {
  hamburguerBtn.addEventListener(`click`, openCloseNav);
  window.addEventListener(`click`, closeOutsideClick);
  window.addEventListener(`scroll`, closeOnScroll);
}

function openCloseNav() {
  const nav = document.querySelector(`.nav`);

  nav.classList.toggle(`nav-active`);
}

function closeOutsideClick(e) {
  const reference = e.target.parentElement;
  const nav = document.querySelector(`.nav`);

  if (nav.classList.contains(`nav-active`) && reference !== hamburguerBtn) {
    nav.classList.remove(`nav-active`);
  }
}

function closeOnScroll() {
  const nav = document.querySelector(`.nav`);

  nav.classList.remove(`nav-active`);
}

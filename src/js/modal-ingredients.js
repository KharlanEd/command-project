(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-ingredients1]"),
    closeModalBtn: document.querySelector("[data-modal-close-ingredients1]"),
    modal: document.querySelector("[data-modal-ingredients1]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-ingredients2]"),
    closeModalBtn: document.querySelector("[data-modal-close-ingredients2]"),
    modal: document.querySelector("[data-modal-ingredients2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-ingredients3]"),
    closeModalBtn: document.querySelector("[data-modal-close-ingredients3]"),
    modal: document.querySelector("[data-modal-ingredients3]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
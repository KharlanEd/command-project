(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-read-more]"),
    closeModalBtn: document.querySelector("[data-modal-close-read-more]"),
    modal: document.querySelector("[data-modal-read-more]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
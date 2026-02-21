const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal__btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});

modalBtnClose.addEventListener("click", toggleModal);

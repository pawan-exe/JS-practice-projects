const openModalBtn = document.querySelector(".openModal");
const modalBackground = document.querySelector(".modal-background");
const closeBtn = document.querySelector(".close-btn");
const closeBtn2 = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
  modalBackground.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalBackground.style.display = "none";
});

closeBtn2.addEventListener("click", () => {
  modalBackground.style.display = "none";
});

window.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === modalBackground) {
    modalBackground.style.display = "none";
  }
});

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle lớp 'show-mobile-menu' để mở/đóng menu
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  // Khi nhấn nút đóng, tắt lớp 'show-mobile-menu'
  document.body.classList.remove("show-mobile-menu");
});

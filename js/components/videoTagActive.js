const tagButtons = document.querySelectorAll(".video-tag__button");

tagButtons.forEach((button) => {
  button.addEventListener("click", (btn) => {
    tagButtons.forEach((btn) => {
      btn.classList.remove("video-tag__button--active");
    });
    button.classList.add("video-tag__button--active");
  });
});
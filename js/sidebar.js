const toggleButton = document.querySelector(".sidebar__toggle");
const sidebar = document.querySelector("aside");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});
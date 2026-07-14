import { updateVideos } from "../controllers/videoController.js";
import { appState } from "../state/appState.js";

const searchInput = document.querySelector(".header__search-input");

searchInput.addEventListener("input", () => {
  appState.searchQuery =  searchInput.value;

  updateVideos();
});
import { videos } from "../data/videos.js";
import { appState } from "../state/appState.js";
import { renderVideos } from "../components/renderVideos.js";

export function updateVideos() {
  let filteredVideos;

  if (appState.selectedCategory === "All") {
    filteredVideos = videos;
  } else {
    filteredVideos = videos.filter((video) => {
      return video.category === appState.selectedCategory;
    });
  }

  filteredVideos = filteredVideos.filter((video) => {
    const title = video.title.toLowerCase();
    const author = video.author.toLowerCase();
    const search = appState.searchQuery.toLowerCase();

    return title.includes(search) || author.includes(search);

  });

  renderVideos(filteredVideos);

}
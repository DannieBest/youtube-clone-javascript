import { videos } from "../data/videos.js";
import { appState } from "../state/appState.js";
import { renderVideos } from "../components/renderVideos.js";

export function updateVideos() {

  const filteredVideos = videos

    .filter((video) => {

      if (appState.selectedCategory === "All") {
        return true;
      }

      return video.category === appState.selectedCategory;

    })

    .filter((video) => {

      const title = video.title.toLowerCase();
      const author = video.author.toLowerCase();
      const search = appState.searchQuery.toLowerCase();

      return (
        title.includes(search) ||
        author.includes(search)
      );

    });

  renderVideos(filteredVideos);

}
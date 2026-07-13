import { videos } from "../data/videos.js";
import { videoTags } from "../data/videoTag.js";
import { renderVideos } from "./renderVideos.js";

const videoTagContainer = document.querySelector(".video-tag__container");

videoTagContainer.addEventListener("click", (event) => {

  if (!event.target.classList.contains("video-tag__button")) {
    return;
  }

  const buttons = document.querySelectorAll(".video-tag__button");

  buttons.forEach((button) => {
    button.classList.remove("video-tag__button--active");
  });

  event.target.classList.add("video-tag__button--active");

  const category = event.target.dataset.category;

  let filteredVideos;

  if (category === "All") {
    filteredVideos = videos;
  } else {
    filteredVideos = videos.filter((video) => {
      return video.category === category;
    });
  }

  renderVideos(filteredVideos);

});
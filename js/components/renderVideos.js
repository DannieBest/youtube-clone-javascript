import {videos} from '../data/videos.js';

export function renderVideos (video) {
  const videoGrid = document.querySelector('.video-grid');
  let videoRender = "";

  videos.forEach((video) => {
    videoRender += `
      <div class="video-card">
        ${video.title}
      </div>
    `;
  });

  videoGrid.innerHTML = videoRender;
};
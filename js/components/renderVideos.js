export function renderVideos (videos) {
  const videoGrid = document.querySelector('.video-grid');
  
  const videoRender = videos
    .map(generateVideoCard)
    .join("");

  videoGrid.innerHTML = videoRender;
}

function generateVideoCard(video) {
  return `
    <article class="video-card" data-video-id="${video.id}">
      <div class="video-card__thumbnail">
        <a href="#">
          <img
            loading="lazy"
            src="${video.thumbnail}"
            alt="${video.title} thumbnail"
          />
        </a>
        <div class="video-card__time">${video.duration}</div>
      </div>
      <div class="video-card__info">
        <div class="video-card__avatar">
          <a href="#">
            <img
              loading="lazy"
              src="${video.avatar}"
              alt="${video.author} avatar"
            />
          </a>
        </div>
        <div class="video-card__details">
          <h3 class="video-card__title">
            ${video.title}
          </h3>
          <a class="video-card__author" href="#">${video.author}</a>
          <p class="video-card__stats">${video.views} views &#183; ${video.uploaded}</p>
        </div>
        <div class="video-card__menu">
          <i class="material-icons">more_vert</i>
        </div>
      </div>
    </article>
  `;
}

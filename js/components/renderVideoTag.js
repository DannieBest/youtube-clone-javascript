import { videoTags } from "../data/videoTag.js";

export function renderVideoTags(videoTags) {

    const videoTagContainer =
        document.querySelector(".video-tag__container");

    const buttonsHTML = videoTags
    .map(videoTag => `
        <button 
          class="video-tag__button ${videoTag.active ? "video-tag__button--active" : ""}
"

            data-type="${videoTag.type}" data-id="${videoTag.id}" data-value="${videoTag.value}"
        >
            ${videoTag.label}
        </button>
    `)
    .join("");

    videoTagContainer.innerHTML = buttonsHTML;

}
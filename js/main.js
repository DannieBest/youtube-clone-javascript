import './components/sidebar.js';
import './components/videotag.js';
import './components/videoTagActive.js';
import { videos } from './data/videos.js';
import { renderVideos } from './components/renderVideos.js';
import { renderVideoTags } from './components/renderVideoTag.js';
import { videoTags } from './data/videoTag.js';
import { updateArrow } from './components/videotag.js';

renderVideos(videos);
renderVideoTags (videoTags);
updateArrow();
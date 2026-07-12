import './sidebar.js';
import './videotag.js';
import { videos } from './data/videos.js';
import { renderVideos } from './components/renderVideos.js';

videos.forEach((video) => { 
  console.log(video.title);
});
import './sidebar.js';
import './videotag.js';
import { videos } from './data/videos.js';


videos.forEach((video) => { 
  console.log(video.title);
});

renderVideos();
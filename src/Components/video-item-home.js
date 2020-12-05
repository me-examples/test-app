import React from 'react';
import '../Styles/video-item.css';

function VideoItemHome() {
	return (
	  <div className="flex-container">
	  <div>
	    <video style={{width: '900px', height:'500px' }} controls autoPlay>
			  <source src="https://d296n67kxwq0ge.cloudfront.net/audio_video/111347d4a5f677165bdd55333f4794cec6949f01-video-14024/web_webm.webm" type="video/mp4" />
			</video>
			</div>
    </div>
	)
}
export default VideoItemHome;
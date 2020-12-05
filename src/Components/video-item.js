import React from 'react';
import { connect } from 'react-redux';
import '../Styles/video-item.css';

const VideoItem = ({videoDetails}) => {
	return (
		<div>
			<ul className="breadcrumb">
			  <li><span>{videoDetails.subject}</span></li>
			  <li><span>{videoDetails.chapter}</span></li>
			  <li><span>{(videoDetails.fileName).replace(/-/g, ' ')}</span></li>
			</ul>
	  <div className="flex-container">

	    <div style={{border: '2px solid green'}}>
		    <video  key={videoDetails.url} style={{width: '800px', height:'400px' }} controls autoPlay>
				  <source src={videoDetails.url} />
				</video>
			</div>
    </div>
    </div>
	)
}

const mapStateToProps = state => {
  console.log('ok');
	return ({
    videoDetails: state.defaultReducer.currentVideo
  });
}
export default connect(mapStateToProps, null)(VideoItem);
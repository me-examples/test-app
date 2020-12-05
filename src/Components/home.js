import React from 'react';
import '../Styles/video-item.css';

const Home = ({videoDetails}) => {
	return (
	  <div className="flex-container">
	    <div style={{marginTop: '20px'}}>
		    <iframe title="home_page_viode" width="800" height="500" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" />
			</div>
    </div>
	)
}
export default Home;
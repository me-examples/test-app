import React from 'react';
import '../Styles/video-item.css';
// const videos = {
// 	1: 'https://www.youtube.com/embed/5rB156W_fRM"',
// 	2: 'https://www.youtube.com/embed/tgbNymZ7vqY',
// 	3: 'https://www.youtube.com/embed/vQsoGF24glY',
// 	4: 'https://www.youtube.com/embed/Bi-7pho5XB8',
// 	5: 'https://www.youtube.com/embed/7sxpKhIbr0E',
// 	6: 'https://www.youtube.com/embed/xnLoToJVQH4',
// 	7: 'https://www.youtube.com/embed/28Kplr_9wxg',
// 	8: 'https://www.youtube.com/watch?v=JMJXvsCLu6s',
// 	9: 'https://www.youtube.com/embed/UZb2NOHPA2A',
// 	10: 'https://www.youtube.com/embed/dWDIoW7f6js',
// 	11: 'https://www.youtube.com/embed/O1C9zOQpKG4',
// 	12: 'https://www.youtube.com/embed/wfATiSQ3Jew',
// 	13: 'https://www.youtube.com/embed/kSVf0Du5-JU',
// 	14: 'https://www.youtube.com/embed/nLGBEETtEPc',
// 	15: 'https://www.youtube.com/embed/YVVTZgwYwVo',
// }
// const getSRC = () => {
// 	const key = Math.floor(Math.random() * 15) + 1;
// 	return videos[key];
// }
const Home = ({videoDetails}) => {
	// const src = getSRC();
	return (
	  <div className="flex-container">
	    { /* <div style={{marginTop: '20px'}}>
		    <iframe
		      title="home video"
		      width="760"
		      height="415"
		      src={src}
		      frameborder="0"
		      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		      allowfullscreen />
			</div> */ }
			  <iframe
			    title="gmat club"
			    src="https://gmatclub.com/"
			    frameborder="0"
			    style={{height: '1000px', width: '100%'}}
			    height="100%"
			    width="100%"
			  />
    </div>
	)
}
export default Home;
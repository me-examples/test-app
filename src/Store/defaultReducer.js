const INITIALSTATE = {
  currentVideo: {
  	subject: 'Introduction',
  	chapter: 'Introduction',
  	fileName: 'test-day',
  	url: 'https://d296n67kxwq0ge.cloudfront.net/audio_video/111347d4a5f677165bdd55333f4794cec6949f01-video-14024/web_webm.webm'
  },
  currentPractice: {
    link: ''
  },
  practicePath: ''
}


export const defaultReducer =  (state = INITIALSTATE, action) => {
 switch (action.type) {
  case 'SET_CURRENT_VIDEO':
	  return {
	  	...state,
	    currentVideo: action.details
	  }
  case 'SET_CURRENT_PRACTICE':
    return {
      ...state,
      currentPractice: action.details
    }
  case 'SET_PRACTICE_PATH':
    return {
      ...state,
      practicePath: action.topicPath
    }
  default:
   return state
 }
}
import React, {useState} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import data from "../Data/data-videos";

function VideosList({setCurrentVideo}) {
	const subjects = [
	  { value: 'Introduction', label: 'Introduction' },
	  { value: 'Math', label: 'Math' },
	  { value: 'AWA', label: 'AWA' },
	  { value: 'IntegratedReasoning', label: 'Reasoning' },
	];
	const [currentSubject, setSubject] = useState({ value: 'Introduction', label: 'Introduction' });
	return (
	  <div>
	    <Select
        value={currentSubject}
        onChange={(option) => {setSubject(option);}}
        options={subjects}
      />
      <hr/>
	      {
	      	Object.keys(data[currentSubject.value]).map(chapKey => {
						const chapter = data[currentSubject.value][chapKey];
						return (<div>
						<div className="well well-sm" style={{backgroundColor: '#ffa5006b', wordWrap: 'break-word'}}>
						  {chapKey}
						</div>
						<ul className="list-group">
							{chapter.map(item => {
								return (
									<li style={{cursor: 'pointer'}} className="list-group-item" onClick={() => {
										setCurrentVideo({
											subject: currentSubject.value,
											chapter: chapKey,
											fileName: item.fileName,
											url: item.url
										});
									}}>
									  {(item.fileName).replace(/-/g, ' ')}
									</li>
								)
							})}
						</ul>
						</div>);
					})
	      }
    </div>
	)
}
const mapDispatchToProps = dispatch => ({
 setCurrentVideo: (details) => {
 	dispatch({ type: 'SET_CURRENT_VIDEO', details: details })}
})
export default connect(null, mapDispatchToProps)(VideosList);
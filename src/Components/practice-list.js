import React from 'react';
import { connect } from 'react-redux';
import data from "../Data/practice_data";

function PracticeList({practiceDetails, setCurrentPractice}) {
	let items = [];
	if (practiceDetails.path){
		const paths = practiceDetails.path.split('/');
	  const diff = paths[paths.length-1];
	  if(diff === 'All') {
	  	const difficulties = practiceDetails.level4;
	  	difficulties.forEach((d) => {
	  		const p = paths.slice(0, paths.length-1);
	  		p.push(d.value);
	  		const l = p.join('/');
	  		const v = data[l] ? data[l]: [];
	  		items = [...items, ...v];
	  	})
	  } else {
	  	items = data[practiceDetails.path] ? data[practiceDetails.path]: [];
	  }
	}
	return (
	  <div>
	    {!!items.length && <ul className="list-group">
	      {
	      	items.map(item => {
							return (
								<li style={{cursor: 'pointer'}} className="list-group-item" onClick={() => {
									setCurrentPractice({
										link: item.path,
									});
								}}>
								  {item.name}
								</li>
							)
						})
	      }
	    </ul>}
    </div>
	)
}
const mapStateToProps = state => {
	return ({
    practiceDetails: state.defaultReducer.practiceDetails
  });
}
const mapDispatchToProps = dispatch => ({
 setCurrentPractice: (details) => {
 	dispatch({ type: 'SET_CURRENT_PRACTICE', details: details })}
})
export default connect(mapStateToProps, mapDispatchToProps)(PracticeList);
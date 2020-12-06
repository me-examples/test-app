import React from 'react';
import { connect } from 'react-redux';
import data from "../Data/practice_data";

function PracticeList({practicePath, setCurrentPractice}) {
  const items = practicePath && data[practicePath] ? data[practicePath]: [];
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
    practicePath: state.defaultReducer.practicePath
  });
}
const mapDispatchToProps = dispatch => ({
 setCurrentPractice: (details) => {
 	dispatch({ type: 'SET_CURRENT_PRACTICE', details: details })}
})
export default connect(mapStateToProps, mapDispatchToProps)(PracticeList);
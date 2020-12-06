import React from 'react';
import { connect } from 'react-redux';
import '../Styles/practice-item.css';

const BASEURL = 'https://dump-gmat.s3.ap-south-1.amazonaws.com';
const PracticeItem = ({practiceDetails}) => {
	const pageURL = (practiceDetails.link).replace(/ /g,"+");
	const breadCrumb = practiceDetails.link ? (practiceDetails.link).split('/'): [];
	const pageLink = `${BASEURL}/${pageURL}`;
	return (
		<div>
			{!!breadCrumb.length && <ul className="breadcrumb">
			  {breadCrumb.map((item) => {
			  	return <li><span>{item || 'Other'}</span></li>
			  })}
			</ul>}
	  <div className="flex-container" style={{overflowY: 'scroll'}}>
	    {!!pageURL ? <iframe
	      src={pageLink}
	      frameBorder="0"
	      width="100%"
	      height= "1000px"
	      name="iframe_a"
	      title="momos pratice page" />: <h4> Select Filters & Question </h4>}
    </div>
    </div>
	)
}

const mapStateToProps = state => {
	return ({
    practiceDetails: state.defaultReducer.currentPractice
  });
}
export default connect(mapStateToProps, null)(PracticeItem);
import React from 'react';
import {
  useParams
} from "react-router-dom";

function PracticeItem() {
	let { practiceId } = useParams();
	return (
	  <div>
	   Practice Item- {practiceId||'default'}
    </div>
	)
}
export default PracticeItem;
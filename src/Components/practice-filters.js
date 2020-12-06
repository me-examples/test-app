import React from 'react';
import PracticeFilterComponent from './practice-filter-component';
import {
  Switch,
  Route,
} from "react-router-dom";

function PracticeFilter() {
	return (
	  <Switch>
      <Route exact path="/practice">
        <div className="row">
          <PracticeFilterComponent />
        </div>
      </Route>
    </Switch>
	)
}

export default PracticeFilter;

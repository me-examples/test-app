import React from 'react';
import VideosList from './videos-list';
import PracticeList from './practice-list';
import {
  Switch,
  Route,
} from "react-router-dom";

function LeftSide() {
	return (
	  <Switch>
      <Route exact path="/videos">
        <div className="col-sm-2 sidenav">
          <VideosList />
        </div>
      </Route>
      <Route path="/practice">
        <div className="col-sm-2 sidenav">
          <PracticeList />
        </div>
      </Route>
    </Switch>
	)
}

export default LeftSide;

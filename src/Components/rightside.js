import React from 'react';
import VideoItem from './video-item';
import PracticeItem from './practice-item';
import {
  Switch,
  Route,
} from "react-router-dom";

function RightSide() {
	return (
    <Switch>
      {/*<Route path="/videos">
        <div className="col-sm-10">
          <VideoItemHome />
        </div>
      </Route>*/}
      <Route path="/videos">
        <div className="col-sm-10">
          <VideoItem />
        </div>
      </Route>
      <Route path="/practice">
        <div className="col-sm-10">
          <PracticeItem />
        </div>
      </Route>
    </Switch>
	)
}

export default RightSide;

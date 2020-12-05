import React from 'react';
import Home from './home';

import {
  Switch,
  Route,
} from "react-router-dom";

function Dashboard() {
	return (
	  <div className="row">
	   <Switch>
	     <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
	)
}

export default Dashboard;

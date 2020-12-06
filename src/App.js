import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from "react-router-dom";
import configureStore from './Store';
import Navbar from './Components/navbar';
import PracticeFilters from './Components/practice-filters';
import LeftSide from './Components/leftside';
import RightSide from './Components/rightside';
import Dashboard from './Components/dashboard';
import './Styles/dashboard.css';

function Test() {
  return (
  	<Provider store={configureStore()}>
	    <Router>
	      <Navbar />
	      <PracticeFilters />
	      <LeftSide />  
	      <RightSide /> 
	      <Dashboard />
	     </Router>
    </Provider>
  );
}

export default Test;
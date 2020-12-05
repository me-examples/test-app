import React from 'react';
import {
  Link
} from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <img alt=".." src="/logo.png" height="50" width="50" />
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/">Home</Link></li>
        <li className="active"><Link to="/videos">Videos</Link></li>
        <li><Link to="/practice">Practice</Link></li>
      </ul>
      {/* <ul className="nav navbar-nav navbar-right">
         <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li> 
      </ul>
      */}
    </div>
  </div>
</nav>
	)
}
export default Navbar
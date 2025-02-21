import React from "react";
import logo from "../../img/logo.jpeg";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary"> 
			<div className="container-fluid"> 
				<a className="navbar-brand" href="#">
					<img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" /> 
					NomadX
				</a>
				<form className="d-flex mx-auto col-lg-6 col-md-8"> 
				<input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
				</form>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Click here
					</button>
					<ul className="dropdown-menu dropdown-menu-end"> 
						<li><a className="dropdown-item" href="#">Home</a></li>
						<li><a className="dropdown-item" href="#">Profile</a></li>
						<li><a className="dropdown-item" href="#">Settings</a></li>
						<li><a className="dropdown-item" href="#">Logout</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
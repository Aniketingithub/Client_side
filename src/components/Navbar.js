import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav
				className="navbar fixed-top navbar-expand-md navbar-light "
				style={{ backgroundColor: "#e3f2fd" }}
			>
				<div className="container-fluid">
					<NavLink id="navb" className="navbar-brand" to="/">
						HackerEarth Assignment
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse d-md-flex justify-content-md-end"
						id="navbarNavAltMarkup"
					>
						<div id="nabc" className="navbar-nav">
							<NavLink className="nav-link me-md-2" to="/new">
								Add Image
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

import React from "react";
import { Link } from "gatsby";

import "../styles/css/main.css";
import "../styles/css/fontawesome-all.min.css";

export default function TitleBar() {
	return (
		<nav id="header" className="inner"> {/* TODO: fix navbar CSS*/}
			<Link to="/" className="logo">Charlotte Urbanists</Link>
			<ul className="icons">
					<li><a href="twitter.com" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="facebook.com" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
					<li><a href="instagram.com" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
			</ul>
		</nav>
	)
}
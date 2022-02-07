import React from "react";
import { Link } from "gatsby";

import "../styles/css/main.css";
import "../styles/css/fontawesome-all.min.css";

export default function TitleBar() {
	return (
		<nav id="header" className="inner"> {/* TODO: fix navbar CSS*/}
			<Link to="/" className="logo">Charlotte Urbanists</Link>
		</nav>
	)
}
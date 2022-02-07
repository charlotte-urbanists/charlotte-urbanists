import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import "../styles/css/main.css";
import "../styles/css/fontawesome-all.min.css";
import CuImg from "../images/cuimage.jpeg";
import TitleBar from "../components/TitleBar";
import ContactForm from "../components/ContactForm";

export default function Home() {
    return (
        <>
        	<Helmet>
						<title>Charlotte Urbanists</title>
						<meta property="og:title" content="Charlotte Urbanists" data-rh="true" />
						<meta property="og:description" content="To advocate for sustainable, sensible, and equitable urban practices and policies" data-rh="true" />
					</Helmet>
					<div id="main">
						<TitleBar />
						<div className="inner">
							<section id="banner">
								<div className="content">
										<header>
												<h1>We are the Charlotte Urbanists</h1>
										</header>
										<p>Our Mission is to combat destructive suburban norms by advocating for sustainable, sensible, and equitable urban practices and policies.</p>
										<ul className="actions">
											<li><Link to="/about" className="button big">Learn More</Link></li>
										</ul>
								</div>
								<img className="image fit" src={CuImg} alt="An illustration of a public transportation friendly city" />
							</section>
							<section>
								<header className="major">
									<h2>Projects</h2>
								</header>
								<div className="features">
									
									{/* TODO: put this article into a separate component */}
									<article>
										<i className="fas fa-bus icon"></i>
										<div className="content">
											<h3>Bus Rider Comfort</h3>
											<p>The stated goal is to foster and facilitate an environment that is friendly for bus riders. To do this, we have decided that adequate seating at bus stops is the best way of improving comfort at a low cost</p>
										</div>
									</article>
									<article>
										<i className="fas fa-walking icon"></i>
										<div className="content">
											<h3>Reduce Pedestrian Fatalities</h3>
											<p>The stated goal is to curb Charlotte's status as being one of the worst pedestrian metros in the United States. In order to tackle this, we hope to pacify the top five pedestrian hotspots where pedestrians have been hit and killed. </p>
										</div>
									</article>
								</div>
							</section>
							<section id="contact_form">
								<header className="major">
									<h2>Interested in what we do? Get in touch</h2>
								</header>
								<ContactForm />
							</section>
						</div>
					</div>
				</>
      );
}

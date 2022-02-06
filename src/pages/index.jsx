import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import "../styles/css/main.css";
import "../styles/css/fontawesome-all.min.css";
import CuImg from "../images/cuimage.jpeg";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Charlotte Urbanists</title>
            </Helmet>
           
            <main id="main">
                <header id="header" className="inner"> {/* TODO: fix navbar CSS*/}
                    <Link to="/" className="logo">Charlotte Urbanists</Link>
                    <ul className="icons">
                        <li><a href="twitter.com" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="facebook.com" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="instagram.com" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    </ul>
                </header>
                    <div className="inner">
                        <section id="banner">
                            <div className="content">
                                <header>
                                    <h1>We are the Charlotte Urbanists</h1>
                                    <p>An organization to promote sustainable housing and transportation in Charlotte</p>
                                </header>
                                <p>Halp what else goes here</p>
                                <ul className="actions">
                                    {/*TODO: provide a valid about more */}
                                    <li><a href="example.com" className="button big">Learn More</a></li>
                                </ul>
                            </div>
                            <img src={CuImg} alt="An illustration of a public transportation friendly city" />
                        </section>

                        <section>
                            <header className="major">
                                <h2>Projects</h2>
                            </header>
                            <div className="features">
                                {/* TODO: put this article into a separate component */}
                                <article>
                                    <span className="icon bench-tree"></span>
                                    <div className="content">
                                        <h3>Bus Stop Project</h3>
                                        <p>We are setting up benches in benchstops</p>
                                    </div>
                                </article>
                            </div>
                        </section>

                
           

        </div>

          </main>
        </>
      )
}

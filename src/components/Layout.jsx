import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Footer from './Footer';
// import Sidebar from './Sidebar';
import TitleBar from './TitleBar';

function TopNavBar() {
  return (
    <div id="top-navbar">
      <div className="inner">
        <nav id="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/support">Support Us</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Charlotte Urbanists</title>
        <meta property="og:title" content="Charlotte Urbanists" data-rh="true" />
        <meta property="og:description" content="To advocate for sustainable, sensible, and equitable urban practices and policies" data-rh="true" />
      </Helmet>
      <div id="main">
        <TitleBar />
        <TopNavBar />
        <div className="inner">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

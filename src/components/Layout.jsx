import React from 'react';
import { Link } from 'gatsby';
import Footer from './Footer';
import TitleBar from './TitleBar';

function TopNavBar() {
  return (
    <div id="top-navbar">
      <div className="inner">
        <nav id="menu">
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/about" activeClassName="active">About Us</Link></li>
            <li><Link to="/support" activeClassName="active">Support Us</Link></li>
            <li><Link to="/bikemap" activeClassName="active">AAA Bike Network Map</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div id="main">
      <TitleBar />
      <TopNavBar />
      <div className="inner">
        {children}
        <Footer />
      </div>
    </div>
  );
}

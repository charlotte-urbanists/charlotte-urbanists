import React from 'react';
import { Link } from 'gatsby';

import '../styles/css/main.css';
import '../styles/css/fontawesome-all.min.css';
import TitleBar from '../components/TitleBar';

export default function Success() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <TitleBar />
          <h3>Thank you for your message. We will be in touch with you shortly</h3>
          <Link to="/"><button type>Go back home</button></Link>
        </div>
      </div>
    </div>
  );
}

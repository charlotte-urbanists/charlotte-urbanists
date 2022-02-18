import React from 'react';

import '../styles/css/main.css';
import '../styles/css/fontawesome-all.min.css';

export default function Footer() {
  return (
    <footer id="footer">
      <p className="copyright">
        © Charlotte Urbanists. All rights reserved. Header Image:
        {' '}
        <a href="https://streetmix.net/" target="_blank" rel="noopener noreferrer">Streetmix</a>
        {'. '}
        Design:
        {' '}
        <a href="https://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a>
      </p>
    </footer>
  );
}

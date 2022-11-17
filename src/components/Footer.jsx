import React from 'react';

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
        {' '}
        <a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
      </p>
    </footer>
  );
}

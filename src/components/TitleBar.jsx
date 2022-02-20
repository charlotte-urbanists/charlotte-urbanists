import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands';

export default function TitleBar() {
  return (
    <header id="header" className="inner">
      {/* TODO: fix navbar CSS */}
      <Link to="/" className="logo">Charlotte Urbanists</Link>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/CLT_Urbanists"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Charlotte Urbanists Twitter"
            className="icon"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/clt_urbanists/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Charlotte Urbanists Instagram"
            className="icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>

      </ul>
    </header>
  );
}

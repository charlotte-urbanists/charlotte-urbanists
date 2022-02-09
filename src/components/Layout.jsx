import React from 'react';
import { Helmet } from 'react-helmet';

import TitleBar from './TitleBar';

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
        <div className="inner">
          {children}
        </div>
      </div>
    </>
  );
}

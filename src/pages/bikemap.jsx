import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import '../styles/sass/main.scss';
import Layout from '../components/Layout';

export default function BikeMap() {
  return (
    <Layout>
      <Helmet>
        <title>Charlotte Bike Map</title>
        <meta name="title" property="og:title" content="Charlotte Bike Map" data-rh="true" />
        <meta name="description" property="og:description" content="A bike map of Charlotte showing protected and unprotected bike lanes" data-rh="true" />
      </Helmet>
      <section>
        <header className="main">
          <h2>Charlotte&apos;s bike lanes</h2>
          {/* TODO: get rid of this hardcoded height */}
          <iframe title="bike map" src="https://drive.google.com/file/d/10xpTlxhsYfo3tIsjKsARjJC5qmghyFO1/preview" width="100%" height="1000px" allow="autoplay" />
        </header>
      </section>
      <hr className="major" />
      <Link to="/" className="button big">Go back home</Link>
    </Layout>
  );
}

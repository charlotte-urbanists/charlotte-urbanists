import React from 'react';
import { Link } from 'gatsby';

import '../styles/sass/main.scss';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

export function Head() {
  const title = 'AAA Bike Network Map';
  const description = 'The unofficial Charlotte Area Bike Network Map for All Ages and Abilities';
  return (
    <PageHead
      title={title}
      description={description}
    />
  );
}

export default function BikeMap() {
  return (
    <Layout>
      <section>
        <header className="main">
          {/* TODO: get rid of this hardcoded height */}
          <iframe title="bike map" src="https://drive.google.com/file/d/10xpTlxhsYfo3tIsjKsARjJC5qmghyFO1/preview" width="100%" height="1000px" allow="autoplay" />
        </header>
      </section>
      <hr className="major" />
      <Link to="/" className="button big">Go back home</Link>
    </Layout>
  );
}

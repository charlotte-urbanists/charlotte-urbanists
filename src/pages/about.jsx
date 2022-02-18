import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import '../styles/css/main.css';
import '../styles/css/fontawesome-all.min.css';
import Layout from '../components/Layout';

export default function AboutUs() {
  const goals = [
    {title: "Walkability", description: "Charlotte Urbanists believe that great cities are cities where people can meet their daily needs via walking or cycling in a safe and pleasant manner."},
    {title: "Transit Wealth", description: "Charlotte Urbanists believe that great cities have transit that is prioritized over private motor vehicles, is pleasant to use, and have reliable, frequent service."},
    {title: "Public Spaces", description: "Charlotte Urbanists believe that great cities are rich in public spaces and pathways where every citizen is allowed to dwell and inhabit without expectation of payment."},
    {title: "Housing", description: "Charlotte Urbanists believe that removing barriers for dense, multi-family housing is an essential element in the path to providing Charlotteans with affordable, flexible housing."},
  ]
    
  return (
    <>
      <Helmet>
        <title>About Charlotte Urbanists</title>
      </Helmet>
      <Layout>
        <section>
          <header className="main">
            <h1>Our Values</h1>
          </header>
        </section>
        <dl>
          {goals.map(({title, description}) => (
            <><dt>{title}</dt><dd>{description}</dd></>
          ))}
        </dl>
        <hr className="major" />
        <Link to="/"><button type>Go back home</button></Link>
      </Layout>
    </>
  );
}

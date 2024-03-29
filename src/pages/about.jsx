import React from 'react';
import { Link } from 'gatsby';

import '../styles/sass/main.scss';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

export function Head() {
  const title = 'About Charlotte Urbanists';
  const description = 'The goals, vision and values of Charlotte Urbanists';
  return (
    <PageHead
      title={title}
      description={description}
    />
  );
}
export default function AboutUs() {
  const goals = [
    { title: 'Accessibility', description: 'Charlotte Urbanists believe that great cities are cities where people can meet their daily needs via walking or cycling in a safe and pleasant manner.' },
    { title: 'Transportation Wealth', description: 'Charlotte Urbanists believe that great cities have transit that is prioritized over private motor vehicles, is pleasant to use, and have reliable, frequent service.' },
    { title: 'Public Spaces', description: 'Charlotte Urbanists believe that great cities are rich in public spaces and pathways where every citizen is allowed to dwell and inhabit without expectation of payment.' },
    { title: 'Affordable Housing', description: 'Charlotte Urbanists believe that removing barriers for dense, multi-family housing is an essential element in the path to providing Charlotteans with affordable, flexible housing through both private and public methods.' },
  ];

  return (
    <Layout>
      <section>
        <header className="main">
          <h2>Our Mission</h2>
        </header>
        <p>
          The Charlotte Urbanists Mission is to fight for Charlotte to be a better city by advocating for sustainable, sensible, and equitable urban practices and policies.
        </p>
      </section>
      <section>
        <header className="main">
          <h2>Our Vision</h2>
        </header>
        <p>
          The Charlotte Urbanists Vision is for Charlotte to be a thriving city with a wealth of transportation options, zero pedestrian fatalities, and affordable housing for all members of the community.
        </p>
      </section>
      <section>
        <header className="main">
          <h2>Our Values</h2>
        </header>
        <dl>
          {goals.map(({ title, description }) => (
            <>
              <dt>{title}</dt>
              <dd>{description}</dd>
            </>
          ))}
        </dl>
      </section>
      <hr className="major" />
      <Link to="/" className="button big">Go back home</Link>
    </Layout>
  );
}

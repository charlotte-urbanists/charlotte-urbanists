import React from 'react';
import { Link } from 'gatsby';

import '../styles/css/main.css';
import '../styles/css/fontawesome-all.min.css';
import CuImg from '../images/cuimage.jpeg';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <Layout>
      <section id="banner">
        <div className="content">
          <header>
            <h1>We are the Charlotte Urbanists</h1>
          </header>
          <p>
            {/* eslint-disable-next-line max-len */}
            Our Mission is to combat destructive suburban norms by advocating for sustainable, sensible, and equitable urban practices and policies
          </p>
          <ul className="actions">
            <li><Link to="/about" className="button big">Learn More</Link></li>
          </ul>
        </div>
        <img className="image fit" src={CuImg} alt="An illustration of a public transportation friendly city" />
      </section>
      <Projects />
      <section id="contact_form">
        <header className="major">
          <h2>Interested in what we do? Get in touch</h2>
        </header>
        <ContactForm />
      </section>
    </Layout>
  );
}

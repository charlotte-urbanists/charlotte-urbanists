import React from 'react';
import { Link } from 'gatsby';

import '../styles/css/main.css';
import '../styles/css/fontawesome-all.min.css';
import CuImg from '../images/cuimage.jpeg';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

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
      <section>
        <header className="major">
          <h2>Projects</h2>
        </header>
        <div className="features">

          {/* TODO: put this article into a separate component */}
          <article>
            <i className="fas fa-bus icon" />
            <div className="content">
              <h3>Bus Rider Comfort</h3>
              <p>
                {/* eslint-disable-next-line max-len */}
                The stated goal is to foster and facilitate an environment that is friendly for bus riders. To do this, we have decided that adequate seating at bus stops is the best way of improving comfort at a low cost.
              </p>
            </div>
          </article>
          <article>
            <i className="fas fa-walking icon" />
            <div className="content">
              <h3>Reduce Pedestrian Fatalities</h3>
              <p>
                {/* eslint-disable-next-line max-len */}
                The stated goal is to curb Charlotte&apos;s status as being one of the worst pedestrian metros in the United States. In order to tackle this, we aim to pacify the top five pedestrian hotspots where pedestrians have been hit and killed.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section id="contact_form">
        <header className="major">
          <h2>Interested in what we do? Get in touch</h2>
        </header>
        <ContactForm />
      </section>
    </Layout>
  );
}

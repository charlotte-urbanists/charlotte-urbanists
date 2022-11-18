import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faWalking } from '@fortawesome/free-solid-svg-icons';

import '../styles/sass/main.scss';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

/**
 * Component for rendering contact us form
 * @returns {JSX}
 */
function ContactForm() {
  return (
    <form
      name="contactCLTU"
      method="post"
      data-netlify="true"
      className="row gtr-uniform"
      action="/success/"
    >
      <input type="hidden" name="form-name" value="contactCLTU" />
      <div className="col-6 col-12-xsmall">
        <label htmlFor="name">
          Name
          <input type="text" name="name" id="name" required />

        </label>
      </div>
      <div className="col-6 col-12-xsmall">
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" required />

        </label>
      </div>
      <div className="col-12">
        <label htmlFor="message">
          Share your thoughts
          <textarea name="message" id="message" placeholder="It would be great if..." />

        </label>
      </div>
      <div className="col-12">
        <ul className="actions">
          <li><button type="submit" className="primary">Submit</button></li>
        </ul>
      </div>
    </form>
  );
}

/**
 * Component for rendering the Projects section
 * @returns {JSX}
 */
function Projects() {
  const projects = [
    {
      icon: faBus,
      title: 'Bus Rider Comfort',
      description: 'The stated goal is to foster and facilitate an environment that is friendly for bus riders. To do this, we have decided that adequate seating at bus stops is the best way of improving comfort at a low cost.',
    },
    {
      icon: faWalking,
      title: 'Reduce Pedestrian Fatalities',
      description: 'The stated goal is to curb Charlotte\'s status as being one of the worst pedestrian metros in the United States. In order to tackle this, we aim to pacify the top five pedestrian hotspots where pedestrians have been hit and killed.',
    },
  ];

  return (
    <section>
      <header className="major">
        <h2>Projects</h2>
      </header>
      <div className="features">
        {projects.map(({ icon, title, description }) => (
          <article>
            <FontAwesomeIcon icon={icon} className="icon" />
            <div className="content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Head() {
  const title = 'Charlotte Urbanists';
  const description = 'To advocate for sustainable, sensible, and equitable urban practices and policies';
  return (
    <>
      <PageHead
        title={title}
        description={description}
      />
      <div id="fb-root" />
    </>
  );
}

export default function Home() {
  return (
    <Layout>
      <section id="banner">
        <div className="content">
          <header>
            <h1>We are the Charlotte Urbanists</h1>
          </header>
          <p>
            Our Mission is to combat destructive suburban norms by advocating for sustainable,
            sensible, and equitable urban practices and policies
          </p>
          <ul className="actions">
            <li><Link to="/about" className="button big">Learn More</Link></li>
          </ul>
        </div>
        <StaticImage src="../images/cuimage.jpeg" alt="An illustration of a well urbanised city" />
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

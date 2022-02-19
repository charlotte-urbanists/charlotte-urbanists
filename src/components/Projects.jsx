/**
 * This component lists all the projects in the index page
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faWalking } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  const projects = [
    {
      icon: faBus,
      title: 'Bus Rider Comfort',
      description: 'The stated goal is to foster and facilitate an environment that is friendly for bus riders. To do this, we have decided that adequate seating at bus stops is the best way of improving comfort at a low cost.',
    },
    {
      icon: faWalking,
      title: 'Reduce Pedestrian Fatalities',
      description: 'The stated goal is to curb Charlotte&apos;s status as being one of the worst pedestrian metros in the United States. In order to tackle this, we aim to pacify the top five pedestrian hotspots where pedestrians have been hit and killed.',
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

import React from 'react';
import { Link } from 'gatsby';

import '../styles/sass/main.scss';
import Layout from '../components/Layout';

export default function Success() {
  return (
    <Layout>
      <h3>Thank you for your message. We will be in touch with you shortly</h3>
          <Link to="/"><button type>Go back home</button></Link>
    </Layout>
          
  );
}

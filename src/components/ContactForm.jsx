import React from 'react';

import '../styles/css/main.css';
import '../styles/css/fontawesome-all.min.css';

export default function ContactForm() {
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

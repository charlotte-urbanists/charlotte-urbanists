import React from "react";

import "../styles/css/main.css";
import "../styles/css/fontawesome-all.min.css";

export default function ContactForm() {
	return (
		<form name="contactCLTU" method="post" data-netlify-recaptcha="true" data-netlify="true" className="row gtr-uniform"
      action="/success"
    >
      <input type="hidden" name="form-name" value="contactCLTU" />
      <div class="col-6 col-12-xsmall">
        <label for="name">Name
        <input type="text" name="name" id="name" required /></label>
      </div>
      <div class="col-6 col-12-xsmall">
        <label for="email">Email
        <input type="email" name="email" id="email" required /></label>
      </div>
      <div class="col-12">
        <label for="message">Share your thoughts
        <textarea name="message" id="message" placeholder="It would be great if..."></textarea></label>
      </div>
      <div class="col-12">
        <ul class="actions">
          <div data-netlify-recaptcha="true"></div>
          <li><button type="submit" class="primary">Submit</button></li>
        </ul>
      </div>
    </form>
	)
}
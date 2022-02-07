import React from "react";
import { Helmet } from "react-helmet";

import "../styles/css/main.css";
import "../styles/css/fontawesome-all.min.css";
import TitleBar from "../components/TitleBar";

export default function AboutUs() {
  return (
    <>
      <Helmet>
          <title>About Charlotte Urbanists</title>
      </Helmet>
      <div id="wrapper">
        <div id="main">
          <div class="inner">
            <TitleBar />
            <section>
              <header class="main">
                <h1>Our Values</h1>
              </header>
            </section>

            {/** TODO: change this bullet list into a generated component */}
            <dl>
              <dt>Walkability</dt>
              <dd>
                Charlotte Urbanists believe that great cities are cities where people can meet their daily needs via walking or cycling in a safe and pleasant manner. 
              </dd>
              <dt>Transit Wealth</dt>
              <dd>
                Charlotte Urbanists believe that great cities have transit that is prioritized over private motor vehicles, is pleasant to use, and have reliable, frequent service.
              </dd>
              <dt>Public Spaces</dt>
              <dd>
                Charlotte Urbanists believe that great cities are rich in public spaces and pathways where every citizen is allowed to dwell and inhabit without expectation of payment.
              </dd>
              <dt>Housing</dt>
              <dd>
                Charlotte Urbanists believe that removing barriers for dense, multi-family housing is an essential element in the path to providing Charlotteans with affordable, flexible housing.
              </dd> 
            </dl>  
            <hr class="major" />
          </div>
        </div>
      </div>
    </>
  );
}
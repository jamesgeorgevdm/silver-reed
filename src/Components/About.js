import React from "react";
import { Figure } from "react-bootstrap";
import logo from "../SaxPics/logo.jpeg";
import Store1 from "../SaxPics/Store1.jpeg";
import Store2 from "../SaxPics/Store2.jpeg";
import "./About.css";

function About() {
  return (
    <div className="about-background">
      {" "}
      {/* Unique container for About page */}
      <div className="about-container">
        {/* Store logo and "About Our Store" text side by side */}
        <div className="about-header">
          <Figure>
            <Figure.Image alt="Store logo" src={logo} />
          </Figure>
          <h2>About Our Store</h2>
        </div>

        {/* Store description */}
        <Figure>
          <Figure.Caption>
            We are a company of professional saxophonists for saxophonists,
            specializing in professional and elite models of the finest
            European/Japanese brands and quality. Founded in Cape Town 2000, we
            are the only store of its kind in South Africa and, thanks to our
            incredible shipping and delivery partners, we have a stellar record
            of delivering your prized instrument to you in the same condition as
            when it first came out of the workshop. Not only this, but we are
            also the forerunners of woodwind instrument repair in the country,
            so if you require these services, do not hesitate to send us a query
            using the email below. We are passionate about sharing knowledge on
            these marvelous instruments, and so our award-winning customer
            service is ready to promptly answer any questions you may have.
          </Figure.Caption>
        </Figure>

        {/* Store front and Store interior images side by side */}
        <div className="image-row">
          <Figure>
            <Figure.Image alt="Store front" src={Store1} />
          </Figure>

          <Figure>
            <Figure.Image alt="Store interior" src={Store2} />
            <Figure.Caption>
              Contact us at:{" "}
              <a href="mailto:selmerepo@gmail.com">selmerepo@gmail.com</a> /
              +27834679134
            </Figure.Caption>
          </Figure>
        </div>
      </div>
    </div>
  );
}

export default About;

"use client"; 
import React from 'react';
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill, RiTwitterFill } from 'react-icons/ri';
import "./footerstyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img src="/maapalogo.jpeg" alt="Maapa Foundation Logo" className="footer-logo" />
          <p>Maapa Foundation: Fostering change through education, healthcare, and community support. Join our mission today</p>
        </div>

        <div className="footer-section links">
          <h4>Pages</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Programs</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>Important</h4>
          <ul>
            <li><a href="/">Donate Now</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Disclaimer</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>
            B-317, 3rd Floor, Sudershan Park, New Delhi, 110015
            <br />
            <a href="tel:+918887796224">+91 8887796224</a>
            <br />
            <a href="mailto:hello@maapafoundation.org">hello@maapafoundation.org</a>
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/maapafoundation/?igsh=MWczZGJkZzZlNmE3YQ%3D%3D"><RiInstagramLine /></a>
            <a href="https://www.facebook.com/p/Maapa-foundation-61551198384180/"><RiFacebookFill /></a>
            <a href="https://www.youtube.com/@maapafoundation"><RiYoutubeFill /></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fmaapafoundation"><RiTwitterFill /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Company, Inc. All rights reserved to <span>Maapa foundation</span></p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from 'react';
import './bannerstyle.css';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-content">
        <h2 className="banner-title">
          Inspire change and support our mission. Your donation makes a real impact.
        </h2>
        <p className="banner-subtitle">Click to donate now!</p>
        <a href="/" className="banner-button">
          Donate Now
        </a>
      </div>
    </section>
  );
};

export default Banner;

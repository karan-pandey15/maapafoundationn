"use client";
import React from 'react';
import { RiStarFill, RiLeafLine, RiSeedlingLine } from 'react-icons/ri';
import './style.css';

const ServiceSection = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <h2 className="section-title">We serve for peoples</h2>
        <p className="section-subtitle">
          Dedicated to uplifting lives, Maapa Foundation serves with compassion, providing vital support for those facing challenges. Together, we make a meaningful difference.
        </p>
        <div className="service-row">
          <div className="service-item">
            <div className="service-icon">
              <RiStarFill />
            </div>
            <h3 className="service-title">Empower Lives</h3>
            <p className="service-text">
              Transforming lives through education, healthcare, and sustainable initiatives. Maapa Foundation serves with dedication and compassion.
            </p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <RiLeafLine />
            </div>
            <h3 className="service-title">Promote Well-being</h3>
            <p className="service-text">
              Advancing community health and well-being. Join Maapa Foundation in fostering positive change for a healthier, happier society.
            </p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <RiSeedlingLine />
            </div>
            <h3 className="service-title">Inspire Growth</h3>
            <p className="service-text">
              Nurturing growth through education and opportunities. Maapa Foundation inspires progress, empowering individuals and communities for a brighter future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

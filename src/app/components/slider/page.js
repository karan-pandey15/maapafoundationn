"use client";
import React from 'react';
import Image from 'next/image';
import "./slider.css"; 

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="image-container">
            <Image src="/9.jpg" alt="Slide 1" fill className="carousel-image" />
          </div>
          <div className="carousel-caption d-block text-left custom-caption">
            <h1 className="slider-title">Empower</h1>
            <p className="slider-subtitle">Empowering lives through sustainable programs. Maapa Foundation strives for lasting impact. Be a part of our transformative journey.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-container">
            <Image src="/13.jpg" alt="Slide 2" fill className="carousel-image" />
          </div>
          <div className="carousel-caption d-block text-left custom-caption">
            <h1 className="slider-title">Support Our Programs</h1>
            <p className="slider-subtitle">Join us in making a difference in the lives of those in need.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-container">
            <Image src="/46.jpg" alt="Slide 3" fill className="carousel-image" />
          </div>
          <div className="carousel-caption d-block text-left custom-caption">
            <h1 className="slider-title">Get Involved</h1>
            <p className="slider-subtitle">Volunteer with us and help change the world, one step at a time.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;

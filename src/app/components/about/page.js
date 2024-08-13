"use client";
import React from "react";
import Image from "next/image";
import "./aboutstyle.css"; // Ensure you have this CSS file in your project

const AboutSection = () => {
  return (
    <section className="about-section container">
      <div className="row align-items-center">
        <div className="col-lg-6 image-wrapper">
          <Image
            src="/46.jpg" // Replace with the actual image path in your public folder
            alt="Maapa Foundation"
            width={600} // Adjust the width according to your design
            height={400} // Adjust the height according to your design
            className="about-image"
          />
        </div>
        <div className="col-lg-6 content-wrapper">
          <h2 className="about-title">Who We Are & What We Do</h2>
          <p className="about-text">
            Maapa Foundation is a government registered with 12A & 80G approved
            NGO and major participation for modern digital education and social
            welfare.
          </p>
          <p className="about-text">
            At Maapa Foundation, we are a family of compassionate individuals
            united by the belief that everyone deserves a helping hand in times
            of need. We are your neighbors, friends, and fellow community
            members committed to making a positive impact on the lives of those
            facing challenges.
          </p>
          <p className="about-text">
            Maapa Foundation is dedicated to supporting those who can’t afford
            life’s basic necessities. We provide financial assistance,
            educational opportunities, healthcare access, and more. Our mission
            is simple – to create a world where kindness and generosity prevail,
            ensuring that no one is left behind. Join us in making a difference
            and building a brighter future for all.
          </p>
          <a href="/" className="read-more-link">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiPhoneFill, RiMailFill, RiInstagramFill, RiFacebookFill, RiYoutubeFill, RiTwitterFill } from 'react-icons/ri';
import "./navbarstyle.css"; 
 
const Navbar = () => {
  return (
    <div>
      <header>
        {/* Contact Info in Navbar */}
        <div className="contact-section">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="contact-info d-flex align-items-center">
              <div className="contact-item d-flex align-items-center me-3">
                <RiPhoneFill className="icon me-2" />
                <a href="tel:+918887796224" className="contact-link">+91 8887796224</a>
              </div>
              <div className="vertical-line"></div>
              <div className="contact-item d-flex align-items-center ms-3">
                <RiMailFill className="icon me-2" />
                <a href="mailto:hello@maapafoundation.org" className="contact-link">hello@maapafoundation.org</a>
              </div>
            </div>
            <div className="social-icons d-flex align-items-center">
              <a href="https://www.instagram.com/maapafoundation?igsh=MWczZGJkZzZlNmE3YQ==" className="social-item me-3">
                <RiInstagramFill />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61551198384180&mibextid=eHce3h" className="social-item me-3">
                <RiFacebookFill />
              </a>
              <a href="https://www.youtube.com/@maapafoundation5024" className="social-item me-3">
                <RiYoutubeFill />
              </a>
              <a href="https://x.com/maapafoundation?t=2sIBHCkx5-jPfTq2k0yPlw&s=08" className="social-item">
                <RiTwitterFill />
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid">
            <Link href="/" passHref>
              <Image src="/maapalogo.jpeg" height={70} width={70} alt="Maapa Foundation" />
            </Link>
            <Link href="/" passHref>
              <span className="navbar-brand ms-3">Maapa Foundation</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" passHref>
                    <span className="nav-link">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/" passHref>
                    <span className="nav-link">About Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/" passHref>
                    <span className="nav-link">Programs</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/" passHref>
                    <span className="nav-link">Gallery</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/" passHref>
                    <span className="nav-link">Blog</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/" passHref>
                    <span className="nav-link">Contact Us</span>
                  </Link>
                </li>
              </ul>
              <Link href="/" passHref>
                <span className="button-css ms-lg-3">Donate Now</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

"use client";
import React from 'react';
import Head from 'next/head';
import Navbar from './components/navbar/page';
import Slider from './components/slider/page';
import Cart from './components/cart/page';
import AboutSection from './components/about/page';
import ServiceSection from './components/ServiceSection/page';
import Banner from './components/banner/page';
import Footer from './components/footer/page';

const Header = () => {
  return (
    <div>
      <Head>
        <title>Maapa Foundation | Empowering Communities</title>
        <meta name="description" content="MAAPA Foundation is dedicated to empowering communities through education, healthcare, and sustainable development." />
        <meta name="keywords" content="maapa, maapa foundation, maapafoundation, community support, education, healthcare, sustainable development" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.maapafoundation.org" />
        <meta property="og:title" content="MAAPA Foundation | Empowering Communities" />
        <meta property="og:description" content="Learn about MAAPA Foundation's mission to uplift communities through education, healthcare, and more." />
        <meta property="og:url" content="https://www.maapafoundation.org" />
    
      </Head>
      <Navbar />
      <Slider />
      <Cart />
      <AboutSection />
      <ServiceSection />
      <Banner />
      <Footer />
    </div>
  );
};

export default Header;

import Header from '../components/Header';
import Image from 'next/image';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Intro from '../components/Intro';

const Home = () => {
  return (
    <main className="bg-gray-50 lg:px-24 md:px-8">
      <Header />
      <Intro />
      <Footer />
    </main>
  );
};

export default Home;

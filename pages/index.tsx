import Header from '../components/Header';
import Image from 'next/image';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Projects from '../components/Projects ';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <main>
      <Intro />
      <Projects />
      <TechStack />
    </main>
  );
};

export default Home;

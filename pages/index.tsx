import React, { useState } from 'react';
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

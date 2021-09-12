import React, { useState } from 'react';
import Intro from '../sections/Intro';
import Projects from '../sections/Projects ';
import TechStack from '../sections/TechStack';

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

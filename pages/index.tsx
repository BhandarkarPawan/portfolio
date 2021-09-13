import React, { useState } from 'react';

import ContactMe from '../components/ContactMe';
import Intro from '../components/Intro';
import MyBlog from '../components/MyBlog';
import Projects from '../components/Projects ';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <main>
      <Intro />
      <Projects />
      <TechStack />
      <MyBlog />
      <ContactMe />
    </main>
  );
};

export default Home;

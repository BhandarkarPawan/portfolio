import React, { useState } from 'react';

import ContactMe from '../components/ContactMe';
import Hero from '../components/Hero';
import MyBlog from '../components/MyBlog';
import Projects from '../components/Projects ';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Projects />
      <TechStack />
      <MyBlog />
      <ContactMe />
    </main>
  );
};

export default Home;

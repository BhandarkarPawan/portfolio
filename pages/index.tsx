import React, { useState } from 'react';
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
    </main>
  );
};

export default Home;

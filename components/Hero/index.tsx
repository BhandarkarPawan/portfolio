import Bubble, { BubbleColor, BubbleSize } from '../../components/Bubble';

import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

const Hero = () => {
  return (
    <div
      className="
      md:flex 
      justify-center 
      lg:px-24 md:px-8
      overflow-hidden
      bg-blue-100
      relative "
    >
      <div className="md:mt-0 mt-24 md:px-0 px-8 z-50 md:w-1/3 md:h-auto h-48 md:text-left text-center flex flex-col justify-center md:items-start items-center">
        <div className="flex md:block">
          <h1 className="z-50 title">Hi.</h1>
          <h1 className="z-50 title ml-4 md:ml-0">I'm Pawan</h1>
        </div>
        <p className="z-50 font-secondary text-2xl font-bold mt-8">
          I will help you accelerate your growth & Take your business online.
        </p>
        <a href="#contact" className={`hoverCard ${styles.actionButton}`}>
          GET IN TOUCH
        </a>
      </div>
      <div className="relative flex mt-24 mx-4 md:mt-0">
        <div className={`bubble ${styles.profileBubble}`}></div>
        <img
          className={styles.profileImage}
          src="/images/branding/pawan-2.png"
          alt="Pawan"
        />
      </div>
    </div>
  );
};

export default Hero;

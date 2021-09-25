import Bubble, { BubbleColor, BubbleSize } from '../../components/Bubble';

import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.description}>
        <div className={styles.greet}>
          <h1>Hi.</h1>
          <h1>I'm Pawan</h1>
        </div>
        <p className={styles.subtext}>
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

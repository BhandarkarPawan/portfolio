import React, { useState } from 'react';
import Image from 'next/image';
import Hamburger from '../Hamburger';
import styles from './index.module.css';

const Header = () => {
  const [navActive, setNavActive] = useState(true);

  return (
    <div
      className="
          md:flex 
          px-4 
          text-black 
          w-full 
          md:justify-between 
          md:pt-8 md:pb-4"
    >
      <div
        className="
            flex 
            justify-between  
            md:w-1/2"
      >
        <div
          className="
            flex 
            items-center"
        >
          <Image
            src="/images/logo-3.png"
            alt="The Prose Code"
            width={72}
            height={36}
          />
          <h1 className="text-2xl ">The Prose Code</h1>
        </div>
        <Hamburger
          navActive={navActive}
          setNavActive={setNavActive}
          className="md-hidden"
        />
      </div>
      <div
        className={`
          z-50
          ${navActive ? 'navPanelIn' : 'hidden'}  
          md:flex 
          w-1/2 
          font-bold 
          md:mb-0 mb-12  
          justify-around 
          tracking-wide`}
      >
        <p className={styles.dropdownItem}>HOME</p>
        <p className={styles.dropdownItem}>BLOG</p>
        <p className={styles.dropdownItem}>THREADS</p>
        <p className={styles.dropdownItem}>ABOUT</p>
      </div>
    </div>
  );
};

export default Header;

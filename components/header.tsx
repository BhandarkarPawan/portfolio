import React, { useState } from 'react';
import Image from 'next/image';
import Hamburger from './hamburger';

const Header = () => {
  return (
    <div className="md:flex px-4  text-black w-full md:justify-between md:pt-8 md:pb-4">
      <div className="flex justify-between  md:w-1/2  md:scale-100">
        <div className="flex items-center  ">
          <Image
            src="/images/logo-3.png"
            alt="The Prose Code"
            width={72}
            height={36}
          />
          <h1 className="text-2xl ">The Prose Code</h1>
        </div>
        <Hamburger className="md-hidden" />
      </div>
      <div className="md:flex hidden w-1/2 font-bold justify-around tracking-wide">
        <p>HOME</p>
        <p>BLOG</p>
        <p>THREADS</p>
        <p>ABOUT</p>
      </div>
    </div>
  );
};

export default Header;

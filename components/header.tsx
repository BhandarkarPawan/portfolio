import React, { useState } from 'react';
import Image from 'next/image';
import Hamburger from './hamburger';

const Header = () => {
  const [navActive, setNavActive] = useState(true);

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
        <Hamburger
          navActive={navActive}
          setNavActive={setNavActive}
          className="md-hidden"
        />
      </div>
      <div
        className={`${
          navActive ? 'navPanelIn' : 'hidden'
        }  md:flex w-1/2 font-bold md:mb-0 mb-12 z-50 justify-around tracking-wide`}
      >
        <p className="md:p-0 md:text-lg py-2 px-8 text-2xl">HOME</p>
        <p className="md:p-0 md:text-lg py-2 px-8 text-2xl">BLOG</p>
        <p className="md:p-0 md:text-lg py-2 px-8 text-2xl">THREADS</p>
        <p className="md:p-0 md:text-lg py-2 px-8 text-2xl">ABOUT</p>
      </div>
    </div>
  );
};

export default Header;

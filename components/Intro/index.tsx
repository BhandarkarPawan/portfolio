import Bubble, { BubbleColor, BubbleSize } from '../../components/Bubble';

import Image from 'next/image';
import React from 'react';

const Intro = () => {
  return (
    <div
      className="
      md:flex 
      justify-center 
      lg:px-24 md:px-8
      relative "
    >
      <Bubble
        color={BubbleColor.YELLOW}
        size={BubbleSize.LARGE}
        className="md:left-12 left-8 md:top-48 top-0"
      />
      <Bubble
        color={BubbleColor.PINK}
        size={BubbleSize.SMALL}
        className="md:left-56 right-24 md:top-96 top-0"
      />
      <Bubble
        color={BubbleColor.BLUE}
        size={BubbleSize.MEDIUM}
        className="md:left-12 right-8 md:bottom-16 md:top-auto top-16"
      />
      <Bubble
        color={BubbleColor.PINK}
        size={BubbleSize.MEDIUM}
        className="md:right-24 right-24 md:bottom-32 top-40 
        "
      />
      <div className="md:mt-0 mt-24 md:px-0 px-8 z-50 md:w-1/3 md:h-auto h-48 md:text-left text-center flex flex-col justify-center md:items-start items-center">
        <div className="flex md:block">
          <h1 className="z-50 title">Hi.</h1>
          <h1 className="z-50 title ml-4 md:ml-0">I'm Pawan</h1>
        </div>
        <p className="z-50 font-secondary text-2xl font-bold mt-8">
          I will help you accelerate your growth & Take your business online.
        </p>
        <a
          href="#contact"
          className="z-50 hover:shadow-2xl hover:scale-105 bg-black text-white font-secondary tracking-wide rounded-3xl text-2xl px-6 py-6 my-8"
        >
          GET IN TOUCH
        </a>
      </div>
      <div className="relative flex mt-24 md:mt-0">
        <div className="z-20 bubble floating-circle left-4 lg:w-96 lg:h-96 sm:w-72 sm:h-72 h-48 w-48 bg-gray-500"></div>
        <div className="mx-8">
          <Image
            className="z-50 "
            src="/images/branding/pawan-2.png"
            alt="Pawan"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

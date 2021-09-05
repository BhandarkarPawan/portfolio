import React from 'react';
import Image from 'next/image';
import Bubble, { BubbleColor, BubbleSize } from '../Bubble';

const Intro = () => {
  return (
    <div
      className="
      md:flex 
      justify-center 
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
      <div className="z-50 md:w-1/3 md:h-auto h-48 md:text-left text-center flex flex-col justify-center">
        <h1 className="title">Hi.</h1>
        <h1 className="title">I'm Pawan</h1>
        <p className="subtitle">A Web Developer</p>
      </div>
      <div className="relative">
        <div className="z-20 bubble floating-circle left-4 lg:w-96 lg:h-96 sm:w-72 sm:h-72 h-56 w-56 bg-gray-500"></div>
        <Image
          className="z-50"
          src="/images/pawan-3.png"
          alt="Pawan"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default Intro;

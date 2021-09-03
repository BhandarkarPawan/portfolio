import React from 'react';
import Bubble, { BubbleColor, BubbleSize } from './bubble';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className="md:flex relative ">
      <Bubble
        color={BubbleColor.GRAY}
        size={BubbleSize.LARGE}
        className="md:left-36 left-0 md:top-48 top-0"
      />
      <Bubble
        color={BubbleColor.GRAY}
        size={BubbleSize.SMALL}
        className="md:left-72 right-24 md:top-96 top-0"
      />
      <Bubble
        color={BubbleColor.GRAY}
        size={BubbleSize.MEDIUM}
        className="md:left-24 right-8 md:bottom-16 md:top-auto top-16"
      />
      <Bubble
        color={BubbleColor.GRAY}
        size={BubbleSize.MEDIUM}
        className="md:right-24 md:bottom-32 top-40 right-24"
      />
      <div className="md:w-1/3 md:h-auto h-48 md:text-left text-center z-50 flex flex-col justify-center">
        <h1 className="mt-4 text-4xl md:text-5xl">Hi.</h1>
        <h1 className="mt-4 text-4xl md:text-5xl">I'm Pawan</h1>
        <p className="mt-2 text-md md:text-xl tracking-wider">
          A Web Developer
        </p>
      </div>
      <Image
        className="z-50"
        src="/images/pawan.png"
        alt="Pawan"
        width={820}
        height={677}
      />
    </div>
  );
};

export default Intro;

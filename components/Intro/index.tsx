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
      <div
        className="
          z-30 
          bubble 
          floating-circle 
          outer-circle 
          md:left-12 left-8 
          md:top-48 top-0 
          md:w-32 md:h-32 w-24 h-24 
        bg-gray-200"
      >
        <div
          className="
            floating-circle 
            md:w-20 w-12 h-12 md:h-20 
            bg-gray-500"
        ></div>
      </div>
      <div
        className="
          z-30 
          bubble 
          floating-circle 
          outer-circle 
          md:left-56 right-24
          md:top-96 top-0 
          md:w-12 md:h-12 w-6 h-6 
        bg-gray-200"
      >
        <div
          className="
            floating-circle 
            md:w-4 md:h-4 w-2 h-2 
          bg-gray-500"
        ></div>
      </div>
      <div
        className="
          z-30 
          bubble 
          floating-circle 
          outer-circle 
          md:left-12 right-8 
          md:bottom-16 
          md:top-auto top-16 
          md:w-20 md:h-20 w-12 h-12 
        bg-gray-200"
      >
        <div
          className="
            floating-circle 
            md:w-12 md:h-12 w-4 h-4  
          bg-gray-500"
        ></div>
      </div>
      <div
        className="
          z-30 
          bubble 
          floating-circle 
          outer-circle 
          md:right-24 md:bo
          ttom-32 top-40 
          right-24 
          md:w-20 md:h-20 w-12 h-12 
        bg-gray-200"
      >
        <div
          className="
            floating-circle 
            md:w-12 md:h-12 w-4 h-4
          bg-gray-500"
        ></div>
      </div>

      <div
        className="
          z-50 
          md:w-1/3 md:h-auto h-48 
          md:text-left text-center 
          flex flex-col 
          justify-center"
      >
        <h1
          className="
            mt-4 
            md:text-5xl text-4xl "
        >
          Hi.
        </h1>
        <h1
          className="
            mt-4 
            md:text-5xl text-4xl "
        >
          I'm Pawan
        </h1>
        <p
          className="
            mt-2 
            md:text-xl text-md  
            tracking-wider"
        >
          A Web Developer
        </p>
      </div>
      <div className="relative">
        <div
          className="
            z-20   
            bubble 
            floating-circle 
            left-4 
            lg:w-96 lg:h-96 sm:w-72 sm:h-72 h-56 w-56 
            bg-gray-500"
        ></div>
        <div
          className="
            z-30 
            bubble 
            md:bold-ring 
            floating-circle 
            md:left-0 left-4 
            md:bottom-72 bottom-48 
            md:w-32 md:h-32 sm:w-20 sm:h-20 h-16 w-16 
            border-8 border-yellow-400 "
        ></div>
        <div
          className="
            z-30
            bubble 
            md:semibold-ring 
            floating-circle  
            left-4
            md:bottom-56 bottom-40  
            md:w-12 md:h-12 h-6 w-6 
            border-8 border-pink-500 "
        ></div>
        <div
          className="
            z-30
            bubble 
            md:semibold-ring 
            floating-circle  
            md:left-20 left-12 
            md:bottom-48 bottom-32 
            md:w-20 md:h-20 h-10 w-10 
            border-8 border-blue-500 "
        ></div>

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

import React from 'react';
import url from '../public/images/misc/WIP-blue.svg';
import Image from 'next/image';

const About = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mx-8">
        <h1 className="title">Work in Progress</h1>
        <p className="subtitle md:text-3xl text-3xl">
          Please check back again soon!
        </p>
        <Image src={url} alt="WIP-blue" height={600} width={600} />
      </div>
    </main>
  );
};

export default About;

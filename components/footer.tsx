import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <a
      href="https://theprosecode.com"
      className="w-full overflow-hidden flex justify-center  h-10 items-center"
    >
      <Image
        src="/images/logo.png"
        alt="TheProseCode"
        height={50}
        width={50}
      ></Image>
      <div className="brand text-sm md:text-md flex items-end">
        <h5>The Prose Code</h5>
        <p className="ml-4 md:text-md text-sm">Pawan Bhandarkar © 2021</p>
      </div>
    </a>
  );
};

export default Footer;

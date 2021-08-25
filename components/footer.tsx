import React from 'react';
import Image from 'next/image';
export const Footer = () => {
  return (
    <a
      href="https://theprosecode.com"
      className="w-full overflow-hidden absolute bottom-0 flex justify-center left-1/2 -translate-x-1/2 h-10 items-center"
    >
      <Image
        src="/images/logo.png"
        alt="TheProseCode"
        height={50}
        width={50}
      ></Image>
      <div className="brand flex items-end">
        <h5>The Prose Code</h5>
        <p className="ml-8 brand name">Pawan Bhandarkar © 2021</p>
      </div>
    </a>
  );
};

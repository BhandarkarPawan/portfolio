import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <a
      href="https://theprosecode.com"
      className="
        overflow-hidden 
        flex 
        justify-center items-center 
        h-10 w-full "
    >
      <Image
        src="/images/logo.png"
        alt="TheProseCode"
        height={50}
        width={50}
      ></Image>
      <div
        className="
            brand 
            md:text-md text-sm 
            flex 
            items-end"
      >
        <h5>The Prose Code</h5>
        <p
          className="
            ml-4 
            md:text-md text-sm"
        >
          Pawan Bhandarkar © {currentYear}
        </p>
      </div>
    </a>
  );
};

export default Footer;

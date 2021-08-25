import { useState } from 'react';
import Image from 'next/image';
const Header = () => {
  return (
    <div className="flex text-white bg-primary w-full justify-between py-8 px-12">
      <div className="flex w-1/2">
        {/* <Image
          className="rounded-full"
          src="/images/logo.png"
          alt="Pawan Bhandarkar"
          height={100}
          width={100}
        /> */}
        <h1 className="text-2xl ">The Prose Code</h1>
      </div>
      <div className="flex w-1/2 justify-around">
        <p>Home</p>
        <p>Threads</p>
        <p>Blog</p>
        <p>About</p>
      </div>
    </div>
  );
};

export default Header;

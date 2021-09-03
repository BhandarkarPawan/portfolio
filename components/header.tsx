import { useState } from 'react';
import Image from 'next/image';
const Header = () => {
  return (
    <div className="flex text-black bg-red-100 w-full justify-between pt-8 pb-4">
      <div className="flex">
        <img
          className="rounded-full"
          src="/images/logo-3.png"
          alt="Pawan Bhandarkar"
          width={65}
        />
        <h1 className=" text-2xl ">The Prose Code</h1>
      </div>
      <div className="flex bg-green-100 w-1/2 font-bold justify-around tracking-wide">
        <p>HOME</p>
        <p>BLOG</p>
        <p>THREADS</p>
        <p>ABOUT</p>
      </div>
    </div>
  );
};

export default Header;

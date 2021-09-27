import React from 'react';
import url from '../public/images/misc/WIP-pink.svg';
import Image from 'next/image';
import Title from '../components/Title';
import Link from 'next/link';

const Threads = () => {
  return (
    <main className="px-8 flex bg-blue-100 flex-col items-center justify-center md:py-12 py-8 pt-4">
      <h1 className="md:text-5xl text-3xl">Twitter Threads</h1>
      <p className="md:text-2xl text-center selection:text-xl mt-4 ">
        Twitter is where I share my content in short, digestible threads.
      </p>
      <Link href="https://twitter.com/BhandarkarPawan">
        <a className="mt-8 hoverCard bg-black rounded-xl font-secondary md:text-3xl text-2xl  px-8 py-4 text-white">
          Follow me
        </a>
      </Link>
      <div className="md:grid mt-8 grid-cols-3 md:w-2/3 md:mx-16">
        <div className="flex flex-col overflow-hidden">
          <img src="/images/threads/next-v-react.png"></img>
          <h1 className="text-3xl"></h1>
          <p className="text-xl mt-4">
            Next.js the future of web development! If you've heard about it and
            have been meaning to try it out, here are 6 reasons for YOU to take
            that first step! 🧵👇
          </p>
          <strong className="font-secondary mt-2">Read More...</strong>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center mx-8">
        <h1 className="title">Work in Progress</h1>
        <p className="subtitle md:text-3xl text-3xl">
          Please check back again soon!
        </p>
        <Image src={url} alt="WIP-pink" height={600} width={600} />
      </div> */}
    </main>
  );
};

export default Threads;

import React from 'react';
import url from '../public/images/misc/WIP-pink.svg';
import Image from 'next/image';
import Title from '../components/Title';
import Link from 'next/link';
import { EColor } from '../lib/data-models';

const Threads = () => {
  return (
    <main className="px-8 flex bg-blue-100 flex-col items-center justify-center md:py-12 py-8 pt-4">
      <Title bgColor={EColor.YELLOW} textColor={EColor.BLACK}>
        Twitter Threads
      </Title>{' '}
      <p className="md:text-2xl text-center selection:text-xl mt-4 ">
        Twitter is where I share my content in short, digestible threads.
      </p>
      <Link href="https://twitter.com/BhandarkarPawan">
        <a className="mt-8 hoverCard bg-black rounded-xl font-secondary md:text-3xl text-2xl  px-8 py-4 text-white">
          Follow me
        </a>
      </Link>
      <div className="md:grid mt-24 grid-cols-2 md:w-3/4 md:mx-16">
        <Link href="https://twitter.com/BhandarkarPawan/status/1430230373510918149?s=20">
          <div className="bg-white shadow-lg  hoverCard flex flex-col overflow-hidden rounded-lg">
            <div className="font-secondary text-3xl text-white px-8 py-16 bg-gray-900 flex text-center ">
              Next.js : What it is and Why you should care about it.
            </div>
            <h1 className="text-3xl"></h1>
            <p className="text-xl mt-4 p-4 ">
              Next.js the future of web development! If you've heard about it
              and have been meaning to try it out, here are 6 reasons for YOU to
              take that first step! 🧵👇
            </p>
            <strong className="font-secondary p-4 ">Read More...</strong>
          </div>
        </Link>
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

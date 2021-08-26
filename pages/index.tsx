import Header from '../components/header';
import Image from 'next/image';
import React, { useState } from 'react';
import { Footer } from '../components/footer';

const Home = () => {
  return (
    <main>
      <Header />
      <div className="md:block flex justify-center w-full items-center">
        <div className="md:w-1/6 mt-24 md:mx-24 mx-12">
          <Image
            className="rounded-full"
            src="/images/ProfilePhoto.png"
            alt="Pawan Bhandarkar"
            height={160}
            width={160}
          />
          <h2 className="mt-4 text-xl">Pawan Bhandarkar</h2>
          <p className="mt-4">Crohn's Combatant</p>
          <p className="mt-2">
            I’m on the road to becoming a full-stack web developer and I share
            my findings as I go
          </p>
          <p className="mt-4">日本語勉強中です</p>
          <hr className="border-b-1 mt-3 border-solid border-gray-500" />
          <br />
          <p className="tracking-wider text-sm"> SOCIALS</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;

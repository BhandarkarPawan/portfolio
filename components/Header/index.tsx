import React, { useState } from 'react';
import Image from 'next/image';
import Hamburger from '../Hamburger';
import NavTab from '../NavTab';
import { EPageName, IPage } from '../../services/data-models';

const Pages: IPage[] = [
  {
    name: EPageName.HOME,
    url: '/',
  },
  {
    name: EPageName.BLOG,
    url: '/blog',
  },
  {
    name: EPageName.THREADS,
    url: '/threads',
  },
  {
    name: EPageName.ABOUT,
    url: '/about',
  },
];

const Header = () => {
  const [navActive, setNavActive] = useState(true);
  const [activePage, setActivePage] = useState<IPage>(Pages[0]);

  return (
    <div
      className="
          md:flex 
          px-4 
          text-black 
          w-full 
          md:justify-between 
          lg:px-24 md:px-8
          md:pt-8 md:pb-4"
    >
      <div
        className="
            flex 
            justify-between  
            md:w-1/2"
      >
        <div
          className="
            flex 
            items-center"
        >
          <Image
            src="/images/branding/logo-2.png"
            alt="The Prose Code"
            width={72}
            height={36}
          />
          <h1 className="text-2xl ">The Prose Code</h1>
        </div>
        <Hamburger
          navActive={navActive}
          setNavActive={setNavActive}
          className="md-hidden"
        />
      </div>
      <div
        className={`
          z-50
          ${navActive ? 'navPanelIn' : 'hidden'}  
          flex 
          md:flex-row flex-col
          md:w-1/2 w-full
          font-bold 
          md:mb-0 mb-12  
          md:justify-around 
          items-start
          tracking-wider`}
      >
        {Pages.map((page) => {
          console.log(`activePage?  ${activePage.name}`);
          return (
            <NavTab
              key={page.name}
              page={page}
              active={activePage == page}
              onClick={setActivePage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;

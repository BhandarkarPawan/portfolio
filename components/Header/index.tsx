import { DISPLAY_TEXT, PAGES } from '../../types/constants';
import React, { useState } from 'react';

import Hamburger from '../Hamburger';
import { IPage } from '../../types/data-models';
import Image from 'next/image';
import NavTab from '../NavTab';
import styles from './index.module.css';

const Header = () => {
  const [navActive, setNavActive] = useState(true);
  const [activePage, setActivePage] = useState<IPage>(PAGES[0]);

  const activeClass = navActive ? 'navPanelIn' : 'hidden';

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.brand}>
          <img
            className={styles.logo}
            src="/images/branding/logo-2.png"
            alt={DISPLAY_TEXT.title}
          />
          <div className={styles.title}>
            <h1>{DISPLAY_TEXT.title}</h1>
            <Hamburger navActive={navActive} setNavActive={setNavActive} />
          </div>
        </div>
      </div>
      <div className={`${styles.navPanel} ${activeClass}`}>
        {PAGES.map((page) => {
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

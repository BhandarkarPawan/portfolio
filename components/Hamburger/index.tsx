import React from 'react';
import styles from './index.module.css';

interface Props {
  navActive: boolean;
  setNavActive: (value: boolean) => void;
  className?: string;
}

const Hamburger: React.FC<Props> = (props) => {
  const className = props.className || '';

  const { navActive, setNavActive } = props;
  return (
    <div
      className="mr-2"
      onClick={(e) => {
        setNavActive(!navActive);
      }}
    >
      <div
        className={`${styles.hamburger} ${className} ${
          navActive && styles.open
        } md:hidden`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
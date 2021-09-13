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
    <button
      className="mr-2"
      onClick={(e) => {
        e.preventDefault();
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
    </button>
  );
};

export default Hamburger;

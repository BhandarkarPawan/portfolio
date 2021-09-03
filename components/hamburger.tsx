import React, { useState } from 'react';

interface Props {
  className?: string;
}

const Hamburger: React.FC<Props> = (props) => {
  const className = props.className || '';

  const [active, setActive] = useState(false);
  return (
    <button
      className="mr-2"
      onClick={(e) => {
        setActive(!active);
      }}
    >
      <div
        id="hamburger"
        className={`${className} ${active && 'open'} md:hidden`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default Hamburger;

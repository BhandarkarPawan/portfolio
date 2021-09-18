import { IPage } from '../../types/data-models';
import Link from 'next/link';
import React from 'react';

export interface Props {
  page: IPage;
  active: boolean;
  onClick: (page: IPage) => void;
  className?: string;
}

const NavTab: React.FC<Props> = (props) => {
  const className = props.className || '';
  const active = props.active;
  const page = props.page;

  const selctedClass = active ? 'border-white' : 'border-transparent';

  const handleClick = () => props.onClick(page);

  return (
    <Link href={page.url}>
      <a
        className={`
        md:text-xl 
        text-2xl 
        md:border-b-8
        md:border-l-0
        border-l-8
        px-4 my-2
        md:p-0 md:m-0
        ${className} 
        ${selctedClass}`}
        onClick={handleClick}
      >
        {page.name}
      </a>
    </Link>
  );
};

export default NavTab;

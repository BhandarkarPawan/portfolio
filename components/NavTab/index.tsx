import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import { IPage } from '../../services/data-models';

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

  const selctedClass = active ? 'border-black' : 'border-transparent';

  const handleClick = () => props.onClick(page);

  return (
    <Link href={page.url}>
      <a
        className={`${styles.navItem} ${className} ${selctedClass}`}
        onClick={handleClick}
      >
        {page.name}
      </a>
    </Link>
  );
};

export default NavTab;

import { EColor } from '../../types/data-models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Title from '../Title';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './index.module.css';

const BlogNav = () => {
  return (
    <aside className="sticky h-screen top-0 hidden md:flex flex-col items-center md:py-16 pl-4 py-8 md:w-1/5">
      <Title
        className="text-center"
        bgColor={EColor.YELLOW}
        textColor={EColor.BLACK}
      >
        My Blog
      </Title>
      <span className="rounded-full text-center mt-8 bg-white p-2 ">
        <FontAwesomeIcon icon={faSearch} className="md:ml-4" />
        <input placeholder="Type Something" className={`${styles.search}`} />
      </span>

      <div className={`hoverCard rounded-2xl mt-12 flex flex-col bg-white p-8`}>
        <p className="font-bold">Stop Coding in Javascript!</p>
        <p className="font-bold">Use Typescript Instead</p>
        <p className="text-sm mt-2">AUG 08, 2021</p>
        <div className="flex text-sm mt-4">
          <div className="rounded-md px-2 py-1 bg-yellow-400">Javascript</div>
          <div className="rounded-md px-2 py-1 text-white ml-2 bg-blue-500">
            Typescript
          </div>
        </div>
      </div>

      <div className="tracking-widest border-t-2 border-b-2 border-gray-400 mt-12 py-4 mx-8">
        Have a Question about a Blog Post? Let’s connect!
      </div>
      <a
        href="https://twitter.com/BhandarkarPawan"
        className="flex items-center font-secondary mx-8 mt-8"
      >
        <FontAwesomeIcon icon={faTwitter} className="mr-3" />
        <p>Questions and clarifications</p>
      </a>
      <a
        href="mailto:pawankbhandarkar@gmail.com"
        className="flex items-center  font-secondary mx-8 mt-4"
      >
        <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
        <p>Feedback and suggestions</p>
      </a>
    </aside>
  );
};

export default BlogNav;

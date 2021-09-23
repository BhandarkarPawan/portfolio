import { EColor } from '../../types/data-models';
import React from 'react';
import Title from '../Title';
import styles from './index.module.css';
import { Post } from '../../lib/api';

const BlogContent = ({ content, coverImage }: Post) => {
  return (
    <div className="flex items-center flex-col px-4 md:py-16 py-8 md:w-4/5 w-full">
      <div className="flex flex-col md:w-2/3 w-full">
        <h1 className="text-5xl font-bold font-secondary">
          Stop Coding In Javascript! Use Typescript Instead.
        </h1>
        <div className="mt-4 md:mt-12 overflow-hidden w-full">
          <img className="w-full" src={coverImage}></img>
        </div>
        <div className="md:flex mt-4 justify-between">
          <div className="tags flex">
            <div className="bg-yellow-400 py-1 px-4 rounded-md">Javascript</div>
            <div className="ml-2 bg-blue-600 text-white py-1 px-4 rounded-md">
              Typescript
            </div>
          </div>
          <div className="md:mt-0 mt-2 tracking-widest font-secondary">
            AUG 08, 2021
          </div>
        </div>
        <div
          className={styles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default BlogContent;

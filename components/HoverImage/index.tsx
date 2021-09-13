import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProject } from '../../types/data-models';
import Image from 'next/image';
import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface Props {
  project: IProject;
  height: number;
  width: number;
  alt?: string;
  className?: string;
}

export const HoverImage: React.FC<Props> = (props) => {
  const { name, github, website, imageName } = props.project;
  const src = `/images/${imageName}`;
  const height = props.height;
  const width = props.width;
  const className = props.className || '';
  const alt = props.alt || '';

  return (
    <div className={`${className} relative md:mt-0 md:mx-0 mt-8 mx-4`}>
      <div className="group flex flex-col items-center justify-center absolute z-20 bg-gray-900 hover:opacity-90 opacity-0 h-full w-full rounded-xl ">
        <div className="z-50 group-hover:flex w-1/3 justify-around hidden text-white title">
          <a href={github}>
            <FontAwesomeIcon icon={faGithub} color="white" />
          </a>
          <a href={website}>
            <FontAwesomeIcon icon={faExternalLinkAlt} color="white" />
          </a>
        </div>
      </div>

      <Image
        className="rounded-xl"
        src={src}
        height={height}
        width={width}
        alt={alt}
      ></Image>
    </div>
  );
};

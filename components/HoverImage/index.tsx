import React from 'react';
import Image from 'next/image';

export interface Props {
  src: string;
  height: number;
  width: number;
  alt?: string;
  className?: string;
}

export const HoverImage: React.FC<Props> = (props) => {
  const src = props.src;
  const height = props.height;
  const width = props.width;
  const className = props.className || '';
  const alt = props.alt || '';

  return (
    <div className={`${className} relative`}>
      <div className="absolute z-20 bg-gray-900 hover:opacity-90 opacity-0 h-full w-full md:rounded-xl "></div>
      <Image
        className="md:rounded-xl"
        src={src}
        height={height}
        width={width}
        alt={alt}
      ></Image>
    </div>
  );
};

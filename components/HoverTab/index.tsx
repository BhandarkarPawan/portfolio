import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ColorEnum, IProject, ITech } from '../../services/data-models';

const getTabColor = (color: ColorEnum) => {
  switch (color) {
    case ColorEnum.BLUE:
      return 'border-blue-500';
    case ColorEnum.YELLOW:
      return 'border-yellow-400';
    case ColorEnum.PINK:
      return 'border-pink-500';
    case ColorEnum.TEAL:
      return 'border-green-300';
    case ColorEnum.WHITE:
      return 'border-white';
    case ColorEnum.ORANGE:
      return 'border-red-500';
  }
};

export interface Props {
  tech: ITech;
  className?: string;
  onHover: (tech: ITech | null) => void;
  active: boolean;
}

const HoverTab: React.FC<Props> = (props) => {
  const className = props.className || '';
  const tech = props.tech;
  const active = props.active;

  const tabColorClass = active ? getTabColor(tech.color) : 'border-transparent';

  const src = `/images/${tech.imageName}`;

  return (
    <div
      className={`${className} ${tabColorClass} border-b-8 pb-4 `}
      onMouseEnter={() => props.onHover(tech)}
    >
      <Image src={src} height={50} width={50}></Image>
    </div>
  );
};

export default HoverTab;

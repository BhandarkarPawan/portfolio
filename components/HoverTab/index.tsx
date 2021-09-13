import { EColor, ITech } from '../../types/data-models';

import Image from 'next/image';
import React from 'react';

const getTabColor = (color: EColor) => {
  switch (color) {
    case EColor.BLUE:
      return 'border-blue-500';
    case EColor.YELLOW:
      return 'border-yellow-400';
    case EColor.PINK:
      return 'border-pink-500';
    case EColor.TEAL:
      return 'border-green-300';
    case EColor.WHITE:
      return 'border-white';
    case EColor.ORANGE:
      return 'border-red-500';
  }
};

export interface Props {
  tech: ITech;
  className?: string;
  onHover: (tech: ITech) => void;
  active: boolean;
}

const HoverTab: React.FC<Props> = (props) => {
  const className = props.className || '';
  const tech = props.tech;
  const active = props.active;

  const tabColorClass = active ? getTabColor(tech.color) : 'border-transparent';
  const scaleClass = active ? 'scale-110' : 'scale-100';
  const src = `/images/${tech.imageName}`;

  return (
    <div
      className={`${className} ${tabColorClass} ${scaleClass} border-b-8 pb-4 `}
      onMouseEnter={() => props.onHover(tech)}
    >
      <Image src={src} height={50} width={50}></Image>
    </div>
  );
};

export default HoverTab;

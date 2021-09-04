import React from 'react';

export enum BubbleColor {
  PINK = 'pink',
  GRAY = 'gray',
  YELLOW = 'yellow',
  BLUE = 'blue',
}

export enum BubbleSize {
  SMALL = 4,
  MEDIUM = 12,
  LARGE = 24,
}

interface Props {
  color: BubbleColor;
  size: BubbleSize;
  className?: string;
}

const Bubble: React.FC<Props> = (props) => {
  const className = props.className || '';
  const outerColor = `bg-${props.color}-200`;
  const innerColor = `bg-${props.color}-500`;

  const inner = props.size;
  const outer = props.size + 8;
  const innerMD = inner + 8;
  const outerMD = outer + 8;

  const innerSize = `h-${inner} w-${inner} md:h-${innerMD} md:w-${innerMD}`;
  const outerSize = `h-${outer} w-${outer} md:h-${outerMD} md:w-${outerMD}`;

  return (
    <div
      className={`z-30 bubble floating-circle outer-circle ${className} ${outerSize} ${outerColor}`}
    >
      <div className={`floating-circle ${innerColor} ${innerSize}`}></div>
    </div>
  );
};

export default Bubble;

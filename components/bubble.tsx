import React from 'react';

export enum BubbleSize {
  SMALL = 4,
  MEDIUM = 12,
  LARGE = 24,
}

export enum BubbleColor {
  GRAY = 'gray',
  PINK = 'pink',
  YELLOW = 'yellow',
  BLUE = 'blue',
}

interface Props {
  size: BubbleSize;
  color: BubbleColor;
  className: string;
}

const Bubble: React.FC<Props> = (props) => {
  const innerSize = props.size;
  const outerSize = props.size + 8;

  const outerCircleColor = `bg-${props.color}-200`;
  const innerCircleColor = `bg-${props.color}-500`;
  const innerCircleSize = `h-${innerSize} w-${innerSize}`;
  const outerCircleSize = `h-${outerSize} w-${outerSize}`;

  const className = props.className || '';

  return (
    <div
      className={`${className} ${outerCircleColor} ${outerCircleSize} z-0 scale-50 md:scale-100 floating-circle flex justify-center items-center opacity-100`}
    >
      <div
        className={`${innerCircleColor} ${innerCircleSize} floating-circle opacity-50`}
      ></div>
    </div>
  );
};

export default Bubble;

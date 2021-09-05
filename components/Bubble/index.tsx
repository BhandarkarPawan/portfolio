import React from 'react';

export enum BubbleColor {
  PINK = 'PINK',
  GRAY = 'GRAY',
  YELLOW = 'YELLOW',
  BLUE = 'BLUE',
}

export enum BubbleSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

interface Props {
  color: BubbleColor;
  size: BubbleSize;
  className?: string;
}

const getBubbleColors = (color: BubbleColor) => {
  switch (color) {
    case BubbleColor.PINK:
      return {
        outer: 'bg-pink-200',
        inner: 'bg-pink-500',
      };
    case BubbleColor.GRAY:
      return {
        outer: 'bg-gray-200',
        inner: 'bg-gray-500',
      };
    case BubbleColor.YELLOW:
      return {
        outer: 'bg-yellow-200',
        inner: 'bg-yellow-500',
      };
    case BubbleColor.BLUE:
      return {
        outer: 'bg-blue-200',
        inner: 'bg-blue-500',
      };
  }
};

const getBubbleSizes = (size: BubbleSize) => {
  switch (size) {
    case BubbleSize.SMALL:
      return {
        outer: 'w-6 h-6 md:w-12 md:h-12',
        inner: 'md:w-4 md:h-4 w-2 h-2',
      };
    case BubbleSize.MEDIUM:
      return {
        outer: 'w-12 h-12 md:w-20 md:h-20 ',
        inner: ' w-4 h-4 md:w-12 md:h-12',
      };
    case BubbleSize.LARGE:
      return {
        outer: 'w-24 h-24 md:w-32 md:h-32',
        inner: 'w-12 h-12 md:w-20 md:h-20 ',
      };
  }
};

const Bubble: React.FC<Props> = (props) => {
  const className = props.className || '';
  const { outer: outerColor, inner: innerColor } = getBubbleColors(props.color);
  const { outer: outerSize, inner: innerSize } = getBubbleSizes(props.size);

  const outerCircleClass = `z-30 bubble absolute rounded-full outer-circle ${className} ${outerSize} ${outerColor}`;
  const innerCircleClass = `rounded-full ${innerColor} ${innerSize}`;

  return (
    <div className={outerCircleClass}>
      <div className={innerCircleClass}></div>
    </div>
  );
};

export default Bubble;

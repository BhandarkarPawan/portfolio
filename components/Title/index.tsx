import { EColor } from '../../types/data-models';

export interface Props {
  bgColor: EColor;
  textColor: EColor;
  className?: string;
  subtitle?: boolean;
}

const getbgColorClass = (color?: EColor) => {
  switch (color) {
    case EColor.TEAL:
      return 'bg-blue-200';
    case EColor.BLUE:
      return 'bg-blue-500';
    case EColor.YELLOW:
      return 'bg-yellow-300';
    case EColor.PINK:
      return 'bg-pink-500';
    case EColor.WHITE:
      return 'bg-white';
    case EColor.BLACK:
      return 'bg-black';
    default:
      return 'bg-transparent';
  }
};

const getTextColorClass = (color?: EColor) => {
  switch (color) {
    case EColor.BLACK:
      return 'text-black';
    case EColor.WHITE:
      return 'text-white';
    default:
      return 'text-black';
  }
};

const Title: React.FC<Props> = (props) => {
  const bgColor = props.bgColor;
  const textColor = props.textColor || EColor.BLACK;
  const className = props.className || '';

  const bgColorClass = getbgColorClass(bgColor);
  const textColorClass = getTextColorClass(textColor);

  const fontClass = props.subtitle ? 'font-secondary' : '';
  const textSizeClass = props.subtitle
    ? 'md:text-4xl sm:text-2xl text-xl font-bold'
    : 'title';

  const translateClass = props.subtitle
    ? '-translate-y-4'
    : 'md:-translate-y-10 -translate-y-9';

  return (
    <div className={`z-50 ${className} ${bgColorClass} px-2 md:h-8 h-5`}>
      <h1
        className={`${textColorClass} ${fontClass} ${textSizeClass} ${translateClass}`}
      >
        {props.children}
      </h1>
    </div>
  );
};

export default Title;

export interface IProject {
  name: string;
  github: string;
  website: string;
  imageName: string;
}

export enum ColorEnum {
  BLUE = 'blue',
  YELLOW = 'yellow',
  PINK = 'pink',
  TEAL = 'teal',
  WHITE = 'white',
  ORANGE = 'orange',
}

export interface ITech {
  name: string;
  imageName: string;
  color: ColorEnum;
  description: string;
}

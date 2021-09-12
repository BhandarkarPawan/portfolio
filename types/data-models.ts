export interface IProject {
  name: string;
  github: string;
  website: string;
  imageName: string;
}

export enum EColor {
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  PINK = 'PINK',
  TEAL = 'TEAL',
  WHITE = 'WHITE',
  ORANGE = 'ORANGE',
}

export enum EPageName {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  BLOG = 'BLOG',
  THREADS = 'THREADS',
}

export interface IPage {
  name: EPageName;
  url: string;
  description?: string;
}

export interface ITech {
  name: string;
  imageName: string;
  color: EColor;
  description: string;
}

import { EPageName, IPage } from './data-models';

export const DISPLAY_TEXT = {
  title: 'The Prose Code',
};

export const PAGES: IPage[] = [
  {
    name: EPageName.HOME,
    url: '/',
  },
  {
    name: EPageName.BLOG,
    url: '/blog',
  },
  {
    name: EPageName.THREADS,
    url: '/threads',
  },
  {
    name: EPageName.ABOUT,
    url: '/about',
  },
];

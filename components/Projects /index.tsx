import * as htmlToImage from 'html-to-image';

import Bubble, { BubbleColor, BubbleSize } from '../../components/Bubble';
import { EColor, IProject } from '../../types/data-models';

import { HoverImage } from '../../components/HoverImage';
import Image from 'next/image';
import Title from '../Title';

const ProjectList: IProject[] = [
  {
    name: 'Tipped',
    github: 'https://github.com/BhandarkarPawan/tip-calculator',
    website: 'https://tipped.netlify.app/',
    imageName: 'projects/Tipped.png',
  },
  {
    name: 'Janken',
    github: 'https://github.com/BhandarkarPawan/rock-paper-scissors',
    website: 'https://janken-pawan.vercel.app',
    imageName: 'projects/Janken.png',
  },
];

const Projects = () => {
  return (
    <div className="relative flex bg-lightblue lg:px-24 md:px-8 flex-col items-center justify-center">
      <Title
        className="md:mb-12 mt-12 "
        bgColor={EColor.YELLOW}
        textColor={EColor.BLACK}
      >
        My Projects
      </Title>
      <div className="grid md:gap-24 md:grid-cols-2 mb-12">
        {ProjectList.map((project, index) => (
          <HoverImage key={index} project={project} height={300} width={450} />
        ))}
      </div>
      <Bubble
        color={BubbleColor.PINK}
        size={BubbleSize.SMALL}
        className="md:left-48 left-12 md:top-12"
      />
      <Bubble
        color={BubbleColor.BLUE}
        size={BubbleSize.MEDIUM}
        className="md:right-24 right-12 top-40"
      />
      <Bubble
        color={BubbleColor.YELLOW}
        size={BubbleSize.SMALL}
        className="md:right-56 right-12 bottom-12"
      />
    </div>
  );
};

export default Projects;

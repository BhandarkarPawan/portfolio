import Image from 'next/image';
import Bubble, { BubbleColor, BubbleSize } from '../../components/Bubble';
import * as htmlToImage from 'html-to-image';
import { HoverImage } from '../../components/HoverImage';
import { IProject } from '../../services/data-models';

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
    <div className="flex bg-gray-200 lg:px-24 md:px-8 flex-col items-center justify-center">
      <div className="md:h-8 md:w-64 h-5 w-48 bg-yellow-300 md:mb-12 mt-12 ">
        <h1 className="z-50 title md:-translate-y-10 -translate-y-9">
          My Projects
        </h1>
      </div>
      <div className="grid md:gap-24 md:grid-cols-2 mb-12">
        {ProjectList.map((project, index) => (
          <HoverImage key={index} project={project} height={300} width={450} />
        ))}
      </div>
      <Bubble
        color={BubbleColor.PINK}
        size={BubbleSize.SMALL}
        className="md:left-56 left-12"
      />
      <Bubble
        color={BubbleColor.BLUE}
        size={BubbleSize.MEDIUM}
        className="md:right-24 right-12 -bottom-56"
      />
      <Bubble
        color={BubbleColor.YELLOW}
        size={BubbleSize.SMALL}
        className="md:right-56 right-12 -bottom-96"
      />
    </div>
  );
};

export default Projects;

import Image from 'next/image';
import Bubble, { BubbleColor, BubbleSize } from '../Bubble';
import * as htmlToImage from 'html-to-image';
import { HoverImage } from '../HoverImage';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:h-8 md:w-64 h-5 w-48 bg-yellow-300 my-12">
        <h1 className="z-50 title md:-translate-y-10 -translate-y-9">
          My Projects
        </h1>
      </div>
      <div className="grid md:gap-12 md:grid-cols-2 ">
        <HoverImage src="/images/Tipped.png" height={300} width={450} />
        <HoverImage src="/images/Janken.png" height={300} width={450} />
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

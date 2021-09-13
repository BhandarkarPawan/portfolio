import Bubble, { BubbleColor, BubbleSize } from '../Bubble';

import { EColor } from '../../types/data-models';
import Image from 'next/image';
import Link from 'next/link';
import Title from '../Title';

const MyBlog = () => {
  return (
    <div className="relative flex flex-col bg-white lg:px-32 py-16 items-center md:content-start p-8 ">
      <Title className="mt-4" bgColor={EColor.YELLOW} textColor={EColor.BLACK}>
        My Blog
      </Title>
      <Bubble
        color={BubbleColor.GRAY}
        size={BubbleSize.SMALL}
        className="md:left-24 left-4 md:top-96 top-80"
      />
      <Bubble
        color={BubbleColor.GRAY}
        size={BubbleSize.MEDIUM}
        className="md:right-24 right-4 md:top-12 top-0"
      />
      <Bubble
        color={BubbleColor.GRAY}
        size={BubbleSize.SMALL}
        className="md:right-44 right-4 md:top-72 top-64"
      />
      <Bubble
        color={BubbleColor.GRAY}
        size={BubbleSize.MEDIUM}
        className="md:right-8 right-12 md:bottom-12 bottom-4"
      />
      <div className="relative flex flex-col  items-center ">
        <div className="bubble z-0 floating-circle hidden md:block h-56 w-56 -left-20 bg-gray-300"></div>
        <div className="mt-8 font-bold tracking-widest z-50 flex justify-between w-full">
          <p>AUG 08, 2021</p>
          <Link href="/blog">
            <a className="text-blue-500">SEE ALL</a>
          </Link>
        </div>
        <div className="md:h-64 mt-4 h-36  overflow-hidden">
          <Image src="/images/blog/TSvJS.jpeg" width={800} height={512}></Image>
        </div>
        <div className="z-50 self-start md:mt-8 mt-6">
          <Title
            className="md:mb-8 mb-6"
            bgColor={EColor.TEAL}
            textColor={EColor.BLACK}
            subtitle
          >
            Stop coding in JavaScript!
          </Title>
          <Title bgColor={EColor.TEAL} textColor={EColor.BLACK} subtitle>
            Use Typescript Instead!
          </Title>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;

import Image from 'next/image';
import { useState } from 'react';
import { EColor, ITech } from '../../types/data-models';
import HoverTab from '../HoverTab';
import Title from '../Title';

const TechList: ITech[] = [
  {
    name: 'Typescript',
    imageName: 'tech-stack/Typescript.png',
    color: EColor.BLUE,
    description:
      "I learned to use Typescript at my first job as a software developer in 2020 and I've been using it ever since. It helps make my code more scalable and the type safety it brings helps speed up development by reducing the number of runtime errors",
  },

  {
    name: 'Python',
    imageName: 'tech-stack/Python.png',
    color: EColor.YELLOW,
    description:
      'Python is my strongest language and I have been using it for over 6 years. I started off by using it for Data Science Projects but now, with the help of Libraries like Flask and SQLAlchemy, I use it to build robust backend services.',
  },

  {
    name: 'GraphQL',
    imageName: 'tech-stack/GraphQL.png',
    color: EColor.PINK,
    description:
      'GraphQL is a query language for APIs. It helps greatly simplify the API structure of the backend. By Using GraphQL, I can provide my frontend systems with a one-stop-shop for all the data they need.',
  },

  {
    name: 'Tailwind',
    imageName: 'tech-stack/Tailwind.png',
    color: EColor.TEAL,
    description:
      'In August of 2021, I had decided to try out Tailwind on a whim. But after a day of reading the docs and a week of building projects, I was smitten. With Tailwind, I was able to build my "Tipped" project in under 200 lines of code!',
  },

  {
    name: 'NextJS',
    imageName: 'tech-stack/NextJS.png',
    color: EColor.WHITE,
    description:
      "NextJS is my preferred framework for building frontend applications. With NextJS, I build websites that are fast, responsive, and fully optimized for search engines and web crawlers, thus boosting your business's online presence.",
  },

  {
    name: 'Pytorch',
    imageName: 'tech-stack/Pytorch.png',
    color: EColor.ORANGE,
    description:
      'Pytorch is is a powerful toolkit for building neural networks and is used in my data science projects. I use Pytorch to build AI models that solve real-world problems and provide value to growing businesses.',
  },
];

const getTitleColor = (color: EColor) => {
  switch (color) {
    case EColor.BLUE:
      return 'text-blue-500';
    case EColor.YELLOW:
      return 'text-yellow-400';
    case EColor.PINK:
      return 'text-pink-500';
    case EColor.TEAL:
      return 'text-green-300';
    case EColor.WHITE:
      return 'text-white';
    case EColor.ORANGE:
      return 'text-red-500';
  }
};

const TechStack = () => {
  const [activeTech, setActiveTech] = useState<ITech>(TechList[0]);

  return (
    <div className="flex md:flex-row flex-col bg-black lg:px-32 items-center justify-center md:content-start p-8 ">
      <div className="flex md:w-1/4 flex-col items-start pt-4 md:pt-0">
        <Title
          className="md:mb-12 mb-8"
          bgColor={EColor.PINK}
          text="Tech"
          textColor={EColor.WHITE}
        />
        <Title bgColor={EColor.PINK} text="Stack" textColor={EColor.WHITE} />
      </div>
      <div className="md:w-3/4 w-full md:mx-24 mx-2 mt-12">
        <div className="md:flex grid grid-cols-3 place-items-center gap-6 justify-between  m-auto">
          {TechList.map((tech, index) => (
            <HoverTab
              active={tech == activeTech}
              key={index}
              tech={tech}
              onHover={setActiveTech}
            />
          ))}
        </div>
        {activeTech && (
          <div>
            <p
              className={`tracking-wider mt-4 font-bold md:text-4xl text-3xl ${getTitleColor(
                activeTech.color
              )}`}
            >
              {activeTech.name}
            </p>
            <div className="pt-4 text-white h-48 subtitle">
              {activeTech.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStack;

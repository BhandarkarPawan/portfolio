import Image from 'next/image';
import { useState } from 'react';
import { ColorEnum, ITech } from '../../services/data-models';
import HoverTab from '../HoverTab';

const TechList: ITech[] = [
  {
    name: 'Typescript',
    imageName: 'Typescript.png',
    color: ColorEnum.BLUE,
    description:
      "I learned to use Typescript at my first job as a software developer in 2020 and I've been using it ever since. It helps make my code more scalable and the type safety it brings helps speed up development by reducing the number of runtime errors",
  },

  {
    name: 'Python',
    imageName: 'Python.png',
    color: ColorEnum.YELLOW,
    description:
      'Python is my strongest language and I have been using it for over 6 years. I started off by using it for Data Science Projects but now, with the help of Libraries like Flask and SQLAlchemy, I use it to build robust backend services.',
  },

  {
    name: 'GraphQL',
    imageName: 'GraphQL.png',
    color: ColorEnum.PINK,
    description:
      'GraphQL is a query language for APIs. It helps greatly simplify the API structure of the backend. By Using GraphQL, I can provide my frontend systems with a one-stop-shop for all the data they need.',
  },

  {
    name: 'Tailwind',
    imageName: 'Tailwind.png',
    color: ColorEnum.TEAL,
    description:
      'In August of 2021, I had decided to try out Tailwind on a whim. But after a day of reading the docs and a week of building projects, I was smitten. With Tailwind, I was able to build my "Tipped" project in under 200 lines of code!',
  },

  {
    name: 'NextJS',
    imageName: 'NextJS.png',
    color: ColorEnum.WHITE,
    description:
      "NextJS is my preferred framework for building frontend applications. With NextJS, I build websites that are fast, responsive, and fully optimized for search engines and web crawlers, thus boosting your business's online presence.",
  },

  {
    name: 'Pytorch',
    imageName: 'Pytorch.png',
    color: ColorEnum.ORANGE,
    description:
      'Pytorch is is a powerful toolkit for building neural networks and is used in my data science projects. I use Pytorch to build AI models that solve real-world problems and provide value to growing businesses.',
  },
];

const getTitleColor = (color: ColorEnum) => {
  switch (color) {
    case ColorEnum.BLUE:
      return 'text-blue-500';
    case ColorEnum.YELLOW:
      return 'text-yellow-400';
    case ColorEnum.PINK:
      return 'text-pink-500';
    case ColorEnum.TEAL:
      return 'text-green-300';
    case ColorEnum.WHITE:
      return 'text-white';
    case ColorEnum.ORANGE:
      return 'text-red-500';
  }
};

const TechStack = () => {
  const [activeTech, setActiveTech] = useState<ITech | null>(null);

  return (
    <div className="flex md:flex-row flex-col bg-black lg:px-32 items-center justify-center md:content-start p-8 ">
      <div className="flex md:w-1/4  flex-col">
        <div className="md:h-8 md:w-32 h-5 w-24 bg-pink-500 mt-12">
          <h1 className="z-50 text-white title md:-translate-y-10 -translate-y-9">
            Tech
          </h1>
        </div>
        <div className="md:h-8 md:w-32 h-5 w-24 bg-pink-500 mt-8">
          <h1 className="z-50 text-white title md:-translate-y-10 -translate-y-9">
            Stack
          </h1>
        </div>
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
            <div className="pt-4 text-white subtitle">
              {activeTech.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStack;

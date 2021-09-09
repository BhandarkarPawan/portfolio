import Image from 'next/image';
const TechStack = () => {
  return (
    <div className="flex md:flex-row flex-col bg-black lg:px-24 items-center justify-center md:content-start p-8 ">
      <div className="flex flex-col">
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
      <div className="md:mx-24 mx-2 mt-12">
        <div className="flex justify-between md:w-2/3 m-auto">
          <Image src="/images/Typescript.png" height={50} width={50}></Image>
          <Image src="/images/Python.png" height={50} width={50}></Image>
          <Image src="/images/GraphQL.png" height={50} width={50}></Image>
          <Image src="/images/Tailwind.png" height={50} width={50}></Image>
          <Image src="/images/NextJS.png" height={50} width={50}></Image>
          <Image src="/images/Pytorch.png" height={50} width={50}></Image>
        </div>
        <div className="pt-4 text-white subtitle">
          Most of the tech I use, I learned during my internship at with my
          current company in Japan. I build my backend using Flask and GraphQL,
          coded in python. The Frontend is built with NextJS and TailwindCSS
        </div>
      </div>
    </div>
  );
};

export default TechStack;

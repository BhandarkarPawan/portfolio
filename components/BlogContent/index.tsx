import { EColor } from '../../types/data-models';
import Highlight from './highlight';
import React from 'react';
import Title from '../Title';
import styles from './index.module.css';

const BlogContent = () => {
  return (
    <div className="flex items-center flex-col px-4 md:py-16 py-8 md:w-4/5 w-full">
      <div className="flex flex-col md:w-2/3 w-full">
        <h1 className="text-5xl font-bold font-secondary">
          Stop Coding In Javascript! Use Typescript Instead.
        </h1>
        <div className="mt-4 md:mt-12 overflow-hidden w-full">
          <img className="w-full" src="images/blog/TSvJS.jpeg"></img>
        </div>
        <div className="md:flex mt-4 justify-between">
          <div className="tags flex">
            <div className="bg-yellow-400 py-1 px-4 rounded-md">Javascript</div>
            <div className="ml-2 bg-blue-600 text-white py-1 px-4 rounded-md">
              Typescript
            </div>
          </div>
          <div className="md:mt-0 mt-2 tracking-widest font-secondary">
            AUG 08, 2021
          </div>
        </div>
        <h1 className="mt-8 font-secondary md:text-4xl text-3xl font-bold">
          Introduction
        </h1>
        <p className="mt-4">
          Recently, I created a Twitter thread about why Typescript should be
          your preferred language for web development. These thoughts were based
          on the experiences I had while learning Javascript and how TS helped
          me overcome them, during the last 2 years of my Web Development
          journey. Here I present the key take-ways from that thread:
        </p>
        <h1 className=" flex mt-8 font-secondary md:text-4xl text-3xl font-bold pb-2 border-b-2 border-gray-400">
          <p>
            1. Typescript is Javascript, but<Highlight>better</Highlight>
          </p>
        </h1>
        <p className="mt-4">
          Recently, I created a Twitter thread about why Typescript should be
          your preferred language for web development. These thoughts were based
          on the experiences I had while learning Javascript and how TS helped
          me overcome them, during the last 2 years of my Web Development
          journey. Here I present the key take-ways from that thread:
        </p>
        <h1 className=" flex mt-8 font-secondary md:text-4xl text-3xl font-bold pb-2 border-b-2 border-gray-400">
          <p>
            2. Compile-time <Highlight>safety</Highlight>for the win
          </p>
        </h1>
        <p className="mt-4">
          Ever had a situation where a function accidentally received a null
          when it was expecting a number? With static types, you can rest
          assured that the input and output of your functions will always be the
          expected type.
        </p>
        <div className="flex mt-8">
          <img className="w-1/2 " src="/images/blog/img1.png" />
          <img className="w-1/2 " src="/images/blog/img2.png" />
        </div>
        <h1 className=" flex mt-8 font-secondary md:text-4xl text-3xl font-bold pb-2 border-b-2 border-gray-400">
          <p>
            3. Interfaces for <Highlight>improved</Highlight> development
          </p>
        </h1>
        <p className="mt-4">
          You can harness the power of interfaces to make your classes and
          objects more secure than ever! Interfaces make your life easier by
          always reminding you of common functions that you may have missed
          during class definition. Never miss out on a function definition!
        </p>
        <img className="w-full mt-8" src="/images/blog/img3.png" />

        <h1 className=" flex mt-8 font-secondary md:text-4xl text-3xl font-bold pb-2 border-b-2 border-gray-400">
          <p>
            4. Your IDE <Highlight>remembers</Highlight>
          </p>
        </h1>
        <p className="mt-4">
          When your code grows large, it’s easy to forget what function is
          expecting what arguments. This can lead to a lot of back and forth
          between files, which takes time and patience. With typescript and the
          right extensions, your IDE tracks it for you! With the Typescript
          extension, VSCode knows exactly what to expect!
        </p>
        <img className="w-full mt-8 self-center" src="/images/blog/img4.png" />
        <h1 className=" flex mt-8 font-secondary md:text-4xl text-3xl font-bold pb-2 border-b-2 border-gray-400">
          <p>
            5. Javascript is also <Highlight>typescript</Highlight>
          </p>
        </h1>
        <p className="mt-4">
          Do you want to start using typescript quickly? It’s easy! Since
          typescript is a superset of Javascript, you can technically get
          started by renaming your .js files to .ts and adding type annotations
          wherever prompted. Just make sure you have the typescript compiler
          installed!
        </p>
        <h1 className=" flex mt-8 font-secondary md:text-4xl text-3xl font-bold pb-2 border-b-2 border-gray-400">
          <p>
            6. Improved <Highlight>readability</Highlight>
          </p>
        </h1>
        <p className="mt-4">
          Typescript when used correctly, also serves as a form of basic
          documentation. This is extremely critical when your code is read by
          other developers in the future. Type annotations allow others to know
          exactly what to input to provide to your functions and what to expect
          in return.
        </p>
        <h1 className=" flex mt-8 font-secondary md:text-4xl text-3xl font-bold pb-2 border-b-2 border-gray-400">
          <p>
            7. Final <Highlight>thoughts</Highlight>
          </p>
        </h1>
        <p className="mt-4">
          With enough practice, Typescript can save you a lot of time and
          frustration that you would otherwise have spent looking for
          semantic/runtime errors. A lot of IDEs have great support for TS and
          can make your development process more enjoyable than ever!
        </p>
      </div>
    </div>
  );
};

export default BlogContent;

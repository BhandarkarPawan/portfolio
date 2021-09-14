import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { EColor } from '../../types/data-models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Title from '../Title';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
  return (
    <div className="flex flex-col bg-black lg:px-32 py-16 items-center md:content-start p-8 ">
      <Title bgColor={EColor.BLUE} textColor={EColor.WHITE}>
        Contact Me
      </Title>
      <div className="md:flex mt-16">
        <div className="md:w-1/2 mx-8">
          <div className="flex items-center ">
            <div className="rounded-full overflow-hidden md:h-16 md:w-16 h-12 w-12 ">
              <Image
                src="/images/branding/profile.png"
                height={500}
                width={500}
              ></Image>
            </div>
            <h1 className="ml-8 text-2xl md:text-3xl text-white">
              Pawan Bhandarkar
            </h1>
          </div>
          <p className="text-xl mt-8 text-white">
            You deserve a website that lives up to your vision. I will built it
            for you. Get in touch and take your Buisness Online!
          </p>
          {/* <p className="text-xl mt-8 text-blue-400 font-bold">
            Available For Hire
          </p> */}
          <div className="flex w-full text-3xl mt-4">
            <a href="https://www.linkedin.com/in/pawan-bhandarkar-b18370137/">
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </a>
            <a href="https://github.com/BhandarkarPawan">
              <FontAwesomeIcon icon={faGithub} color="white" className="ml-7" />
            </a>
            <a href="https://twitter.com/BhandarkarPawan">
              <FontAwesomeIcon
                icon={faTwitter}
                color="white"
                className="ml-7"
              />
            </a>
            <a href="https://www.instagram.com/stable.stool/">
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                className="ml-7"
              />
            </a>
            <a href="https://codepen.io/BhandarkarPawan">
              <FontAwesomeIcon
                icon={faCodepen}
                color="white"
                className="ml-7"
              />
            </a>
            <a href="mailto:pawankbhandarkar@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                className="ml-7"
              />
            </a>
          </div>
        </div>
        <div className="md:block hidden md:w-1/2 md:mt-0 mt-16 mx-8">
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden h-20 w-20">
              <Image
                src="/images/branding/logo.png"
                height={500}
                width={500}
              ></Image>
            </div>
            <h1 className="ml-2 text-2xl md:text-3xl text-white">About</h1>
          </div>
          <p className="text-xl mt-4 text-white">
            To “Prose” means to speak simply, without complexity.
          </p>
          <p className="text-xl mt-4 text-white">
            The Prose Code was created with the ambition of proving that great
            code does not need to be complicated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

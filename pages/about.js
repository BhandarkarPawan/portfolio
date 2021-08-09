import Image from 'next/image';
const About = () => {
  return (
    <div>
      <Image
        src="/images/profile.png"
        alt="PawanBhandarkar"
        width={100}
        height={100}
      ></Image>
    </div>
  );
};

export default About;

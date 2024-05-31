import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/victor.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className=" pb-7 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Victor Terra
            </h1>
            <span className="bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-3xl tracking-tight text-transparent">
              Desenvolvedor Full Stack
            </span>
            <p className="text-center md:text-left my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className=" w-72 lg:w-96 rounded-full"
              src={profilePic}
              alt="Foto do Victor de perfil"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

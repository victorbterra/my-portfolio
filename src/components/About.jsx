import aboutImg from "../assets/aboutImg.jpg";
import { ABOUT_TEXTP1, ABOUT_TEXTP2, ABOUT_TEXTP3 } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        Sobre
        <span className=" text-green-600"> mim</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className=" w-96 rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:justify-start mt-10">
            <p className="my-2 max-w-xl text-left">{ABOUT_TEXTP1}</p>
            <p className="my-2 max-w-xl text-left">{ABOUT_TEXTP2}</p>
            <p className="my-2 max-w-xl text-left">{ABOUT_TEXTP3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

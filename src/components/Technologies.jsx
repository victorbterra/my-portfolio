import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="mt-10 mb-6 text-center text-4xl">Tecnologias</h2>
      <p className=" text-center text-neutral-500 text-md">
        Tecnologias em que desenvolvo e estudo
      </p>
      <div className="my-20 text-center text-4xl">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className=" rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-6xl text-green-600" />
          </div>
          <div className=" rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-6xl text-cyan-500" />
          </div>
          <div className=" rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-6xl text-white" />
          </div>
          <div className=" rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-6xl text-green-600" />
          </div>
          <div className=" rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-6xl  text-blue-500" />
          </div>
          <div className=" rounded-2xl border-4 border-neutral-800 p-4">
            <SiPostgresql className="text-6xl  text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

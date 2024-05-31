import { SiWhatsapp } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
  <>
    <div className=" pb-5">
        <h1 className="my-6 text-center text-3xl">Entre em Contato</h1>
        <div className="flex gap-6 justify-center text-center tracking-tighter">
            <a href="#" className="my-4 text-2xl"><SiWhatsapp /></a>
            <a href="mailto:victorterradev@gmail.com" className="my-4 text-2xl"><MdOutlineEmail /></a>
            <a href="https://www.linkedin.com/in/victorbterra/" target="_blank" className="my-4 text-2xl"><FaLinkedin /></a>
            <a href="https://github.com/victorbterra" target="_blank" className="my-4 text-2xl"><FaGithub /></a>
            <a href="https://www.instagram.com/victorterradev/" target="_blank" className="my-4 text-2xl"><FaInstagram /></a>
        </div>
    </div>
    <div className="flex justify-center text-center pt-2">
          <h4 className="my-3 text-sm text-neutral-400">Site Desenvolvido por 👽 Victor Terra.</h4>
    </div>
  </>
  )
}

export default Footer
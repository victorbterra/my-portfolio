import React from "react";
import logo from "../assets/logobr.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-28" src={logo} alt="logo victor terra dev" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a className=" hover:text-green-600 transition-all duration-200" href="https://www.linkedin.com/in/victorbterra/" target="_blank"><FaLinkedin /></a>
        <a className=" hover:text-green-600 transition-all duration-200" href="https://github.com/victorbterra" target="_blank" ><FaGithub /></a>
        <a className=" hover:text-green-600 transition-all duration-200" href="https://www.instagram.com/victorterradev/" target="_blank"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;

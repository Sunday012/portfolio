import React from 'react'
import { IconType } from 'react-icons'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

export const Icon = ({icon} : {icon : IconType}) => {
  return (
    <>
      {icon === FaLinkedin && <FaLinkedin size={24}/>}
      {icon === FaGithub && <FaGithub size={24}/>}
      {icon === IoLogoWhatsapp && <IoLogoWhatsapp size={24}/>}
      {icon === BiLogoGmail && <BiLogoGmail size={24}/>}
    </>
  )
}

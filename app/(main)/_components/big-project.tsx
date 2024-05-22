"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'
import { useMediaQuery } from 'usehooks-ts'

type Stack = {
    stack: string;
};

type Project = {
    src: string;
    name: string;
    context: string;
    stacks: Stack[];
    github: string;
    live: string;
};

interface ProjectProps {
    project: Project;
    id: number
}

export const BigProject = ({project, id}: ProjectProps) => {
    
  return (
    <button
            className="flex items-center justify-center shrink-0"
            key={id}
            role="link"
            onClick={() => (window.location.href = project.live)}
          >
            <div className="flex items-center w-[80%] lg:h-[400px] h-full">
              <div className="w-full h-full hidden lg:flex">
                <Image
                  src={project.src}
                  alt=""
                  width={600}
                  height={600}
                  className="w-full h-full"
                />
              </div>
              <div className="z-20 lg:ml-[-100px] ml-0 w-full h-full">
                <div className="trapezium-shape w-full h-full ml-[-10px]  bg-blue-800 dark:bg-[#00d4ff]" />
                <div 
                className="trapezium-shape left-0 bg-[#1E293B] lg:items-end items-start rounded-l-sm flex flex-col p-6 gap-4 lg:mt-[-400px] mt-0 h-full"
                style={{
                  backgroundImage: `url(${project.src})`,
                  backgroundOrigin: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundBlendMode: "soft-light"
                }}
                >
                  <p className="text-[#94A3B8]">Project</p>
                  <h2 className="text-white  dark:text-[#00d4ff]  lg:text-2xl text-xl font-bold">
                    {project.name}
                  </h2>
                  <p className="text-white dark:text-[#9e9b9b] lg:text-end text-start w-[90%]">
                    {project.context}
                  </p>

                  <div className="flex gap-2 text-white dark:text-[#9e9b9b] flex-wrap">
                    {project.stacks.map((stacks, id) => (
                      <p key={id}>{stacks.stack}</p>
                    ))}
                  </div>

                  <div className="flex gap-4 items-end">
                    <Link href={project.github}>
                      <FaGithub
                        size={24}
                        className="dark:text-[#00d4ff] text-white "
                      />
                    </Link>
                    <Link href={project.live}>
                      <IoRocketSharp
                        size={24}
                        className="dark:text-[#00d4ff] text-white "
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
          </button>
  )
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoRocketSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Sora } from "next/font/google";
import { OtherProjectDetails, ProjectDetails } from "@/constants";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export default function Projects() {
  return (
    <section className="mt-24">
      <div className="flex flex-col items-center gap-20">
        <div className="flex items-center justify-center">
          <h2 className="dark:text-[#9e9b9b] text-blue-800 lg:text-3xl text-xl font-bold">
            My Projects
          </h2>
        </div>

        {ProjectDetails.map((project, id) => (
          <div
            className="flex items-center justify-center cursor-pointer"
            key={id}
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
                <div className="trapezium-shape left-0 bg-[#1E293B] lg:items-end items-start rounded-l-sm flex flex-col p-6 gap-4 lg:mt-[-400px] mt-0 h-full">
                  <p className="text-[#94A3B8]">Project</p>
                  <h2 className="text-white  dark:text-[#00d4ff]  lg:text-2xl text-xl font-bold">
                    {project.name}
                  </h2>
                  <p className="text-white dark:text-[#9e9b9b] lg:text-end text-start">
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
          </div>
        ))}

        <h2 className="dark:text-[#9e9b9b] text-blue-800 lg:text-xl text-xl font-bold">
          Other Projects
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:px-20 px-10">
          {OtherProjectDetails.map((project, id) => (
          <div
          key={id}
          className="bg-[#1E293B] rounded-md flex flex-col items-center w-full p-4 gap-2 border-l-[6px] dark:border-l-[#00d4ff] border-l-blue-800">
            <h2 className="text-white  dark:text-[#00d4ff] lg:text-2xl text-xl font-bold">
              {project.name}
            </h2>
            <p className="text-white dark:text-[#9e9b9b] ">
             {project.context}
            </p>
            <div className="flex gap-2 text-white dark:text-[#9e9b9b] flex-wrap w-full items-start mt-10">
              {project.stacks.map((stack, id) => (
                <p key={id}>{stack.stack}</p>
              ))}
            </div>

            <div className="flex gap-4 w-full items-end justify-end px-2 mt-10">
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
          ))}
        </div>
      </div>
    </section>
  );
}

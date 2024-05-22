import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoRocketSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Sora } from "next/font/google";
import { OtherProjectDetails, ProjectDetails } from "@/constants";
import { BigProject } from "./big-project";

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
          <BigProject project={project} id={id} />
        ))}

        <h2 className="dark:text-[#9e9b9b] text-blue-800 lg:text-xl text-xl font-bold">
          Other Projects
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:px-20 px-10">
          {OtherProjectDetails.map((project, id) => (
          <button
          role="link"
          onClick={() => window.location.href == project.live}
          key={id}
          className="dark:bg-blur bg-blursm rounded-md flex flex-col items-center w-full p-4 gap-2 shadow-lg">
            <h2 className="text-[#141C3A]  dark:text-[#00d4ff] lg:text-2xl text-xl font-bold">
              {project.name}
            </h2>
            <p className="text-[#141C3A] dark:text-[#9e9b9b] ">
             {project.context}
            </p>
            <div className="flex gap-2 text-[#141C3A] dark:text-[#9e9b9b] flex-wrap w-full items-start mt-10">
              {project.stacks.map((stack, id) => (
                <p key={id}>{stack.stack}</p>
              ))}
            </div>

            <div className="flex gap-4 w-full items-end justify-end px-2 mt-10">
              <Link href={project.github}>
                <FaGithub
                  size={24}
                  className="dark:text-[#00d4ff] text-[#141C3A] "
                />
              </Link>
              <Link href={project.live}>
                <IoRocketSharp
                  size={24}
                  className="dark:text-[#00d4ff] text-[#141C3A] "
                />
              </Link>
            </div>
          </button>
          ))}
        </div>
      </div>
    </section>
  );
}

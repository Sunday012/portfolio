import React from "react";
import Image from "next/image";
import Link from "next/link"
import { IoRocketSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Sora } from "next/font/google";

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500"]
})
export default function Projects() {
  return (
    <section className="mt-24">
      <div className="">
        <div className="flex items-center justify-center mb-20">
          <h2 className="dark:text-[#9e9b9b] text-blue-800 lg:text-3xl text-xl font-bold">
            My Projects
          </h2>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <div className="flex items-center w-[80%] lg:h-[400px] h-full">
            <div className="w-full h-full">
              <Image src="/movieapp.jpg" alt="" width={600} height={600}  className="w-full h-full"/>
            </div>
            <div className="trapezium-shape bg-[#1E293B] border-l-[10px] dark:border-l-[#00d4ff] border-blue-800 z-20 lg:ml-[-100px] ml-0 rounded-l-sm flex flex-col items-end p-6 gap-4 w-full h-full">
              <p className="text-[#94A3B8]">Project</p>
              <h2 className="text-blue-800 dark:text-[#00d4ff] lg:text-2xl text-xl font-bold">
                Flare App
              </h2>
              <p className="text-end w-[90%] text-[#94A3B8]">
                Having struggled with understanding how the Spotify OAuth flow
                works, I made the course I wish I could have had. Unlike
                tutorials that only cover a few concepts and leave you with
                half-baked GitHub repositories, this course covers everything
                from explaining the principles of REST APIs to implementing
                Spotify's OAuth flow and fetching API data in a React app. By
                the end of the course, you’ll have an app deployed to the
                internet you can add to your portfolio.
              </p>

              <div className="flex gap-2 text-[#94A3B8]">
                <p>React</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>JavaScript</p>
                <p>JavaScript</p>
              </div>
              <div className="flex gap-4">
                <Link
                href="www.github.com"
                >
              <FaGithub size={24} className="dark:text-[#00d4ff] text-blue-800"/>
                </Link>
                <Link
                href="www.github.com"
                >
              <IoRocketSharp size={24} className="dark:text-[#00d4ff] text-blue-800"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

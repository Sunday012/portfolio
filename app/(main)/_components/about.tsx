"use client";
import React from "react";
import { CompaniesDetails, Companies } from "@/constants";
import { useState } from "react";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import { Sora } from "next/font/google";
import { motion } from "framer-motion";
const sora = Sora({
  weight: ["200", "400", "500"],
  subsets: ["latin"],
});
export const About = () => {
  const aboutVar = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  const [selectedCompany, setSelectedCompany] = useState("Vierra LLC");
  return (
    <section className="mt-24">
      <motion.div
        className="flex flex-col gap-4 items-center justify-center"
        variants={aboutVar}
        initial="initial"
        whileInView="animate"
        viewport={{once : true}}
      >
        <h2 className="dark:text-[#9e9b9b] text-blue-800 lg:text-3xl text-xl font-bold">
          My Experience
        </h2>
        <div className="w-[80%]">
          <div className="flex items-center border-b dark:border-b-[#9e9b9b] border-b-blue-800">
            {Companies.map((place, id) => (
              <button
                className={`py-5 lg:px-10 px-4 hover:bg-slate-300 dark:hover:bg-stone-600 dark:hover:text-[#00d4ff] hover:text-blue-800 
            ${
              selectedCompany === place.name
                ? "bg-slate-300 dark:bg-stone-600 dark:text-[#00d4ff] text-blue-800 border-b border-b-blue-900 dark:border-b-[#00d4ff]"
                : "dark:text-[#9e9b9b] text-[#141C3A]"
            } 
            rounded-t-md items-center text-nowrap w-full`}
                key={id}
                onClick={() => setSelectedCompany(place.name)}
              >
                {place.name}
              </button>
            ))}
          </div>
          {CompaniesDetails.filter(
            (details) => details.name === selectedCompany
          ).map((placedetails, id) => (
            <div className="flex flex-col justify-start mt-6 gap-2" key={id}>
              <div className="dark:text-[#9e9b9b] text-[#141C3A] text-xl font-semibold">
                {placedetails.role}
                <Link
                  href={placedetails.link}
                  className="dark:text-[#00d4ff] text-blue-800"
                >
                  {" "}
                  @{placedetails.name}
                </Link>
              </div>
              <span className="dark:text-[#9e9b9b] text-[#141C3A] mb-4">
                {placedetails.dateworked}
              </span>
              <div className="flex flex-col items-center justify-center">
                {placedetails.workdone.map((work, id) => (
                  <ul
                    className="dark:text-[#9e9b9b] text-[#141C3A] flex flex-col gap-4 lg:w-[70%] w-full"
                    key={id}
                  >
                    <li className="flex gap-4">
                      <span>
                        <MdDoubleArrow
                          size={18}
                          className="dark:text-[#00d4ff] text-blue-800"
                        />
                      </span>
                      {work.task}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

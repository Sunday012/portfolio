import React from "react";
import Link from "next/link";

import { Header } from "./header";
import { animate, easeIn, easeInOut, easeOut, motion } from "framer-motion";

import { SideItems } from "@/constants";
import Image from "next/image";
import { Icon } from "@/components/icon";

export const Hero = () => {
 
  const heroVar = {
    initial: {
      y: 100,
      opacity: 0
    },
    animate:{
      y: 0,
      opacity: 1,
      transition:{
        duration: 2,
        ease: "easeInOut",
        delay: 4
    }
    }
  }

  return (
    <section className="h-full w-full dark:bg-[#0a0a0a]">
      <div className="w-full lg:h-[100vh] h-full">
        <Header />
        <motion.div className="flex lg:ml-16 ml-0 lg:mt-20 mt-[74px] lg:px-24 px-10 "
        variants={heroVar}
        initial="initial"
        animate="animate"
        >
          <div className="flex flex-col gap-3">
          <span className="dark:text-[#47eaff] text-blue-800 font-semibold text-xl">
            Hello i&apos;m
          </span>
          <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-[#00d4ff] lg:text-6xl text-4xl font-bold text-nowrap">
            Favour Sunday.
          </h1>
          <h2 className="dark:text-[#9e9b9b] text-black lg:text-5xl text-3xl font-bold lg:w-[90%] w-[100%] lg:leading-[64px] lg:mb-8 mb-4">
            FrontEnd Developer,<br className="flex"/>Love Playing Chess
          </h2>
          <div>
            <span className="dark:text-[#47eaff] text-blue-800">Fun Fact</span>
            <p className="mt-3 mb-2 dark:text-[silver] text-black text-wrap">
              Gave up going to Medical school Just to Pursue what i love{" "}
              {"<PROGRAMMING>"}{" "}
            </p>
            <p className="dark:text-[silver] text-black text-wrap">
              Currently, I&apos;m focused on building Interactive, innovative
              software at VierraLLC.
            </p>
          </div>
          </div>

          <div className="lg:block hidden">
            <Image 
             src="/moon2.png"
             alt="moon"
             width={400}
             height={100}
             className="hidden dark:flex"
            />
          </div>
        </motion.div>
        <div className="sm:flex fixed gap-3 mt-[90vh] top-0 left-0 ml-[64px] hidden">
          {SideItems.map((items, index) => (
            <Link href={items.link} key={index} className="dark:text-[#47eaff] text-blue-800">
              <Icon icon={items.src}/>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

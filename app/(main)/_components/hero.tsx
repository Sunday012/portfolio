import React from "react";
import Link from "next/link";

import { Header } from "./header";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

import { SideItems } from "@/constants";
import { HeroBackground } from "./herobackground";
import Image from "next/image";
import { Icon } from "@/components/icon";

export const Hero = () => {
 
  return (
    <section className="h-[100vh] w-full">
      <HeroBackground />
      <div className="absolute top-0 left-0 w-full">
        <Header />
        <div className="flex lg:ml-16 ml-0 lg:mt-20 mt-10 lg:px-24 px-10">
          <div className="flex flex-col gap-3">
          <span className="text-[#47eaff] font-semibold text-xl">
            Hello i&apos;m
          </span>
          <h1 className="dark:text-[#d8d6d6] text-black lg:text-6xl text-4xl font-bold">
            Favour Sunday.
          </h1>
          <h2 className="dark:text-[#9e9b9b] text-black lg:text-5xl text-3xl font-bold lg:w-[90%] w-[100%] lg:leading-[64px] leading-[32px] lg:mb-8 mb-4 text-nowrap">
            FrontEnd Developer, Plays Chess.
          </h2>
          <div>
            <span className="text-[#47eaff]">Fun Fact</span>
            <p className="mt-3 mb-2 dark:text-[silver] text-black">
              Gave up going to Medical school Just to Pursue what i love{" "}
              {"<PROGRAMMING>"}{" "}
            </p>
            <p className="dark:text-[silver] text-black">
              Currently, I&apos;m focused on building Interactive, innovative
              software at VierraLLC.
            </p>
          </div>
          </div>

          <div>
            <Image 
             src="/moon2.png"
             alt="moon"
             width={400}
             height={100}
             className="hidden dark:flex"
            />
          </div>
        </div>
        <div className="lg:flex fixed flex-col gap-3 mt-[70vh] top-0 left-0 ml-[64px] hidden">
          {SideItems.map((items, index) => (
            <Link href={items.link} key={index} className="text-[#47eaff]">
              <Icon icon={items.src}/>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

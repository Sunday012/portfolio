"use client"
import {motion} from "framer-motion"

import { Hero } from "./_components/hero"
import { About } from "./_components/about";
import Projects from "./_components/projects";

const Home = () => {
const pageVariants = {
    initial:{
        opacity: 0
    },
    animate:{
        opacity: 1,
        transition:{
            duration: 2,
            ease: "easeInOut",
            delay: 4
        }
    }
}
  return (
    <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    className="w-full h-full dark:bg-[#0c0e20] bg-[#f4f4f4]"
    >
       <Hero />
       <About />
       <Projects />
    </motion.div>
  );
};

export default Home;
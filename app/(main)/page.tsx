"use client"
import {motion} from "framer-motion"

import { Hero } from "./_components/hero"
import { About } from "./_components/about";
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
            delay: 5
        }
    }
}
  return (
    <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    className="w-full h-full dark:bg-[#0D1036] bg-gray-100"
    >
       <Hero />
       <About />
    </motion.div>
  );
};

export default Home;
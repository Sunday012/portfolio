"use client"

import {motion} from "framer-motion"
import Link from "next/link"

import {SideItems} from "@/constants"

import {Header} from "./_components/header"
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
    className="w-full h-full"
    >
       <Header />
       <div className="fixed top-0 left-0">
        {SideItems.map((items) => (
            <Link
            href={items.link}
            >
            {items.text}
            </Link>
        ))}
       </div>
    </motion.div>
  );
};

export default Home;
import Link from "next/link";
import { motion } from "framer-motion";


export default function Contact() {
  const contactVar = {
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
  return (
    <div className="mt-36 flex items-center justify-center">
      <motion.div
        className="flex items-center text-center justify-center flex-col px-6 w-full"
        variants={contactVar}
        initial="initial"
        whileInView="animate"
        viewport={{once : true}}
      >
        <h1 className="text-2xl font-semibold  text-[#141C3A] dark:text-[#9e9b9b]">
          Interested in Meeting and collaborating with Me ?
        </h1>
        <p className="text-xl mt-4 mb-10 text-[#141C3A] dark:text-[#9e9b9b]">
          I’m always open to discussing a new project or partnership
          opportunities.
        </p>
        <Link
          href="mailto:sundayfavour997@gmail.com"
          className="mb-4 rounded-3xl ring dark:ring-[#00d4ff] ring-blue-800 dark:text-[#00d4ff] text-blue-800 w-[250px] px-10 py-2 dark:hover:bg-[#00d4ff] hover:bg-blue-800 hover:text-white dark:hover:text-[#141C3A]"
        >
          Reach Out
        </Link>
      </motion.div>
    </div>
  );
}

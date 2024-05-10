import Image from "next/image";

export default function MySelf() {
  return (
    <div className="mt-24 lg:mt-6">
      <div className="flex flex-col gap-2 items-center justify-between lg:px-24 px-10">
        <h1 className="dark:text-[#00d4ff] text-blue-800 lg:text-3xl text-xl font-bold mb-4">
          About Me
        </h1>
        <div className="">
          <p className="dark:text-[#9e9b9b] text-[#141C3A]">
            Hey there! I'm Favour, a passionate coder with a knack for bringing
            digital dreams to life. My journey into the world of web development
            kicked off with a curious tinkering with HTML in 2020. Who knew that
            writing a simple hello world and seeing it appear on the browser
            could spark a new feeling
            <br />
            Since then, my coding adventures have taken me to diverse landscapes
            — from an internship position to innovative start-up. But it's not
            just about the places I've been; it's about the magic I've woven
            into every project.
            <br />
            Much like my strategic maneuvers on the chessboard, I approach
            coding with a blend of foresight and problem-solving prowess. Every
            move, whether it's crafting an elegant user interface or untangling
            a knotty algorithm, is a testament to my dedication and skill.
            <br />
            At Vierra LLC, I'm on a mission to create digital experiences that
            are not just visually stunning but also accessible to all. My latest
            endeavor? working on an web app that connects handymans smoothly to
            their customers
            <br />
            <br />
            So, if you're ready to embark on a coding journey filled with
            excitement and innovation, I'm your guide. Let's craft software
            masterpieces that dazzle and inspire! Here are a few of the
            technologies I've been wielding with finesse lately:
          </p>
          <div className="mt-4 w-full">
            <ul className="grid grid-cols-3 dark:text-[#00d4ff] text-blue-800 gap-4">
              <li>JavaScript</li>
              <li>ReactJs</li>
              <li>TypeScript</li>
              <li>NextJs</li>
              <li>SQL</li>
              <li>RestAPI</li>
              <li>GraphQL</li>
              <li>NodeJs</li>
              <li>Prisma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

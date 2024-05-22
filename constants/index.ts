import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

export const SideItems = [
    {
        text: "Linkedin",
        link:"",
        src: FaLinkedin
    },
    {
        text: "GitHub",
        link:"",
        src: FaGithub
    },
    {
        text: "Whatsapp",
        link:"",
        src: IoLogoWhatsapp
    },
    {
        text: "Mail",
        link:"",
        src: BiLogoGmail
    }
]

export const Companies = [
    {name:"Vierra LLC"},
    {name:"Forage"},
    {name:"GCCC"},
]

export const CompaniesDetails = [
    {name: "Vierra LLC",link:"https://vierradev.com",role: "Front End Developer",dateworked: "January 2024 - till date",workdone: [
        {task: "Handled all data going into the database through a form or from somewhere else making them all safe."},
        {task: "refurnished a client website by implementing a new dashboard to track all products ordered or downloaded"},
        {task: "Collaborated with designers, project managers, and other engineers to transform creative concepts into production realities for clients"},
    ]},
    {name: "GCCC",link:"https://vierradev.com",role: "Front End Developer",dateworked: "August 2023 - September 2023",workdone: [
        {task: "Built a crypto dashoard alongside other developers"},
        {task: "Won the best Frontend developer award"},
    ]},
    {name: "Forage",link:"https://vierradev.com",role: "Front End Intern",dateworked: "November 2023 - December 2023",workdone: [
        {task: "Fixed reported issues made about the backpack app. for example with the application being slowI decided to implement lazy loading for the images and also used suspense and a placeholderwhile contentwere stillloading"},
        {task: "Helped in improving the backpack appwith the proper use of React.js."},
        {task: "Tested and implemented more featuresinto the application, for example i added a calendarcomponent that tracksthe date and schedulesfor travel."},
    ]},
]

export const ProjectDetails = [
    {src: "/movieapp.jpg",name:"Movie Net", context: "A website that keeps you up to date with trending movies and tv shows, you won't be worried about not watching your favourite Tv-show and movie ever again.", stacks:[
        {stack: "React + vite"},
        {stack: "JavaScript"},
        {stack: "MovieApi"},
        {stack: "A.i Api"},
        {stack: "Skeleton Loader"},
    ], github:"www.github.com", live: "https://movie-appbase.vercel.app/"},
    {src: "/twitter-clone.png",name:"Twitter Clone", context: "This project was built with sole the aim of learning one of the most prominent database on the planet POSTGRESQL, it open my mind to the endless capacity of the database plus making a cool app as a reward.", stacks:[
        {stack: "TypeScript"},
        {stack: "Supabase"},
        {stack: "Next.js"},
        {stack: "Tailwind Css"},
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
]

export const OtherProjectDetails = [
    {name:"Flare App", context: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam autem. Voluptas doloribus et sint culpa ullam facere quisquam, doloremque, repellat vel tenetur dolorum repudiandae eligendi aliquid quos fuga dolor!", stacks:[
        {stack: "NextJS"},
        {stack: "JavaScript"},
        {stack: "Mongodb"},
        {stack: "Next auth"},
        {stack: "prisma"},
    ], github:"www.github.com", live: "https://movie-appbase.vercel.app/"},
    {name:"Berny", context: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam autem. Voluptas doloribus et sint culpa ullam facere quisquam, doloremque, repellat vel tenetur dolorum repudiandae eligendi aliquid quos fuga dolor!", stacks:[
        {stack: "TypeScript"},
        {stack: "Prisma"},
        {stack: "Mongodb"},
        {stack: "Tailwind Css"},
        {stack : "Clerk auth"}
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    {name:"MERN Event App", context: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam autem. Voluptas doloribus et sint culpa ullam facere quisquam, doloremque, repellat vel tenetur dolorum repudiandae eligendi aliquid quos fuga dolor!", stacks:[
        {stack: "TypeScript"},
        {stack: "Mongodb"},
        {stack: "Reactjs"},
        {stack: "Express.js"},
        {stack: "Node.js"}
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    {name:"Job search", context: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam autem. Voluptas doloribus et sint culpa ullam facere quisquam, doloremque, repellat vel tenetur dolorum repudiandae eligendi aliquid quos fuga dolor! ", stacks:[
        {stack: "React Native"},
        {stack: "Supabase"},
        {stack: "Next.js"},
        {stack: "Tailwind Css"},
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    {name:"PERN To do App", context: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam autem. Voluptas doloribus et sint culpa ullam facere quisquam, doloremque, repellat vel tenetur dolorum repudiandae eligendi aliquid quos fuga dolor!", stacks:[
        {stack: "JavaScript"},
        {stack: "postgresql"},
        {stack: "React"},
        {stack: "Tailwind Css"},
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    {name:"Weather App", context: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam autem. Voluptas doloribus et sint culpa ullam facere quisquam, doloremque, repellat vel tenetur dolorum repudiandae eligendi aliquid quos fuga dolor!", stacks:[
        {stack: "JavaScript"},
        {stack: "React.js"},
        {stack: "Weather API"},
        {stack: "React-icons"},
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
]
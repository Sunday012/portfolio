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
        {task: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more"},
        {task: "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements"},
        {task: "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders"},
    ]},
    {name: "GCCC",link:"https://vierradev.com",role: "Front End Developer",dateworked: "August 2023 - September 2023",workdone: [
        {task: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more"},
        {task: "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements"},
        {task: "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders"},
    ]},
    {name: "Forage",link:"https://vierradev.com",role: "Front End Intern",dateworked: "November 2023 - December 2023",workdone: [
        {task: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more"},
        {task: "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements"},
        {task: "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders"},
    ]},
]

export const ProjectDetails = [
    {src: "/movieapp.jpg",name:"Movie Net", context: "A website that keeps you up to date with trending movies and tv shows, you won't be worried about watching your favourite Tv-show and movie ever again.", stacks:[
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
    {name:"Flare App", context: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, ", stacks:[
        {stack: "NextJS"},
        {stack: "JavaScript"},
        {stack: "Mongodb"},
        {stack: "Next auth"},
        {stack: "prisma"},
    ], github:"www.github.com", live: "https://movie-appbase.vercel.app/"},
    {name:"Berny", context: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, ", stacks:[
        {stack: "TypeScript"},
        {stack: "Prisma"},
        {stack: "Mongodb"},
        {stack: "Tailwind Css"},
        {stack : "Clerk auth"}
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    {name:"MERN Event App", context: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories,", stacks:[
        {stack: "TypeScript"},
        {stack: "Mongodb"},
        {stack: "Reactjs"},
        {stack: "Express.js"},
        {stack: "Node.js"}
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    {name:"Job search", context: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, ", stacks:[
        {stack: "React Native"},
        {stack: "Supabase"},
        {stack: "Next.js"},
        {stack: "Tailwind Css"},
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    {name:"PERN To do App", context: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, ", stacks:[
        {stack: "JavaScript"},
        {stack: "postgresql"},
        {stack: "React"},
        {stack: "Tailwind Css"},
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    {name:"Weather App", context: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, ", stacks:[
        {stack: "JavaScript"},
        {stack: "React.js"},
        {stack: "Weather API"},
        {stack: "React-icons"},
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
]
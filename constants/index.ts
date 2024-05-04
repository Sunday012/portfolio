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
    {src: "/movieapp.jpg",name:"Movie Net", context: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.", stacks:[
        {stack: "React + vite"},
        {stack: "JavaScript"},
        {stack: "MovieApi"},
        {stack: "A.i Api"},
        {stack: "Skeleton Loader"},
    ], github:"www.github.com", live: "www.github.com"},
    {src: "/movieapp.jpg",name:"Twitter Clone", context: "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.", stacks:[
        {stack: "TypeScript"},
        {stack: "Supabase"},
        {stack: "Next.js"},
        {stack: "Tailwind Css"},
    ], github:"www.github.com", live: "www.github.com"},
]
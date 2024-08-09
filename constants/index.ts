import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

export const SideItems = [
    {
        text: "Linkedin",
        link:"https://www.linkedin.com/in/sunday-favour-6059682a2/",
        src: FaLinkedin
    },
    {
        text: "GitHub",
        link:"https://github.com/Sunday012",
        src: FaGithub
    },
    {
        text: "Whatsapp",
        link:"https://wa.me/+2349092001540",
        src: IoLogoWhatsapp
    },
    {
        text: "Mail",
        link:"mailto:sundayfavour997@gmail",
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
    {src: "/pancker.png",name:"Pantry Tracker", context: "Pantry Tracker is a web application designed to help users manage and track their pantry items. Users can add, update, and monitor expiration dates for their food items, ensuring they use them before they go bad. The app is built with Next.js and TypeScript, with Firebase handling authentication and data storage. The UI is styled with Material-UI.", stacks:[
        {stack: "NextJs"},
        {stack: "TypeScript"},
        {stack: "Firebase"},
        {stack: "Material_UI"},
        {stack: "Skeleton Loader"},
    ], github:"www.github.com", live: "https://pancker.vercel.app/"},
    {src: "/twitter-clone.png",name:"Twitter Clone", context: "This project was built with sole the aim of learning one of the most prominent database on the planet POSTGRESQL, it open my mind to the endless capacity of the database plus making a cool app as a reward.", stacks:[
        {stack: "TypeScript"},
        {stack: "Supabase"},
        {stack: "Next.js"},
        {stack: "Tailwind Css"},
    ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
]

export const OtherProjectDetails = [
    {name:"Ziggo-ChatAi", context: "Ziggo-ChatAi is an intelligent customer service platform that leverages AI to provide real-time support to users to offer natural language processing capabilities, enabling the AI agent to understand and respond to customer inquiries. The platform is designed to help businesses automate customer support, improving response times and customer satisfaction.", stacks:[
        {stack: "NextJS"},
        {stack: "TypeScript"},
        {stack: "Clerk"},
        {stack: "llama 3.1 Api"},
        {stack: "shadcn-ui"},
    ], github:"www.github.com", live: "https://flare-app-rho.vercel.app"},
    {name:"Hush Chat", context: "Hush Chat is a project built by myself and two of my colleagues, Jet and Meshach, a secure messaging platform designed for privacy-focused users. The app allows real-time chat with end-to-end encryption, ensuring that messages remain private. Users can create accounts, join chat rooms, and send encrypted messages.", stacks:[
        {stack: "NextJS"},
        {stack: "JavaScript"},
        {stack: "TypeScript"},
        {stack: "Node.Js"},
        {stack: "Mongodb"},
        {stack: "Firebase"},
        {stack: "Gemini Api"},
        {stack: "socket.io"},
    ], github:"www.github.com", live: "https://hush-v2.vercel.app"},
    {name:"RateMyBarber", context: "An Hackathon project involving Gehad Hamada, Mohammad Abdullah, Mohammad Sanaullah and Myself showcases a website called rateMyBarber.com where users will be able to post reviews of specific barbers from barbershops/independent from home barbers. They will be able to rate them on 5 star scale and categorize them on the basis of their expertise (ex- taper, fade, locks, etc). Users can post pictures along with their review of their haircut.", stacks:[
        {stack: "TypeScript"},
        {stack: "PostgreSQL"},
        {stack: "Node.Js"},
        {stack: "Tailwind Css"},
    ], github:"www.github.com", live: "https://rate-my-barbers.vercel.app/"},
    // {name:"MERN Event App", context: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam autem. Voluptas doloribus et sint culpa ullam facere quisquam, doloremque, repellat vel tenetur dolorum repudiandae eligendi aliquid quos fuga dolor!", stacks:[
    //     {stack: "TypeScript"},
    //     {stack: "Mongodb"},
    //     {stack: "Reactjs"},
    //     {stack: "Express.js"},
    //     {stack: "Node.js"}
    // ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    // {name:"Job search", context: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam autem. Voluptas doloribus et sint culpa ullam facere quisquam, doloremque, repellat vel tenetur dolorum repudiandae eligendi aliquid quos fuga dolor! ", stacks:[
    //     {stack: "React Native"},
    //     {stack: "Supabase"},
    //     {stack: "Next.js"},
    //     {stack: "Tailwind Css"},
    // ], github:"www.github.com", live: "https://twitter-clone-black-eight.vercel.app/"},
    {name:"PERN To do App", context: "PERN To Do App is a task management tool built with the PERN stack. It allows users to create, update, and delete tasks, with all data stored in a PostgreSQL database. The app features a responsive UI built with React and styled using Tailwind CSS.", stacks:[
        {stack: "JavaScript"},
        {stack: "postgresql"},
        {stack: "React"},
        {stack: "Tailwind Css"},
    ], github:"www.github.com", live: "https://todo-app-weld-six.vercel.app/"},
    {name:"Weather App", context: "Weather App is a simple web application that provides real-time weather information using data from the Weather API. Users can search for any city and get the current weather, along with additional details like temperature and humidity. The app is built with React.js and styled with React-icons.", stacks:[
        {stack: "JavaScript"},
        {stack: "React.js"},
        {stack: "Weather API"},
        {stack: "React-icons"},
    ], github:"www.github.com", live: "https://weather-app-chi-nine-77.vercel.app"},
    {name:"Movie Net", context: "A website that keeps you up to date with trending movies and tv shows, you won't be worried about not watching your favourite Tv-show and movie ever again.", stacks:[
        {stack: "React + vite"},
        {stack: "JavaScript"},
        {stack: "MovieApi"},
        {stack: "A.i Api"},
        {stack: "Skeleton Loader"},
    ], github:"www.github.com", live: "https://movie-appbase.vercel.app/"},
]
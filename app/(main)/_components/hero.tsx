import React from 'react'
import { Header } from './header'
import { SideItems } from '@/constants'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className='h-[100vh] w-full'>
        <div className='flex h-[100vh] items-center justify-center dark:bg-black w-full'>
        
        </div>
        <div className='absolute top-0 left-0 w-full'>
        <Header />
        <div className='flex flex-col gap-3 lg:ml-16 ml-0 lg:mt-20 mt-10 lg:px-24 px-10'>
            <span className='dark:text-[#47eaff] font-semibold text-xl'>Hello i&apos;m</span>
            <h1 className='dark:text-[#d8d6d6] text-black lg:text-6xl text-4xl font-bold'>Favour Sunday.</h1>
            <h2 className='text-[#9e9b9b] lg:text-5xl text-3xl font-bold lg:w-[90%] w-[100%] lg:leading-[64px] leading-[32px] lg:mb-8 mb-4'>FrontEnd Developer, Plays Chess.</h2>
            <div>
                <span className='dark:text-[#47eaff]'>Fun Fact</span>
                <p className='mt-3 mb-2 text-[silver]'>Gave up going to Medical school Just to Pursue what i love {"<PROGRAMMING>"} </p>
                <p className='text-[silver]'>Currently, I&apos;m focused on building Interactive, innovative software at VierraLLC.</p>
            </div>
        </div>
        <div className="lg:flex fixed flex-col gap-3 mt-[70vh] top-0 left-0 ml-[64px] hidden">
        {SideItems.map((items) => (
            <Link
            href={items.link}
            className='text-[#47eaff]'
            >
            {items.text}
            </Link>
        ))}
       </div>
        </div>
    </section>
  )
}

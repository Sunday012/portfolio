import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
    <div>
         <Image 
        src="/white-portfolio.svg"
        alt="logo"
        width={100}
        height={10}
        className="dark:hidden w-20"
        />
        <Image 
        src="/dark-portfolio.svg"
        alt="logo"
        width={100}
        height={10}
        className="hidden dark:block w-20"
        />
    </div>
  )
}

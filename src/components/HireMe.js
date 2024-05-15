import React from 'react'
import { CustomBanner } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 
     md:bottom-auto md:absolute sm:right-0'
    >
        <div className='w-44 h-auto flex items-center justify-center relative md:w-24'>
            <CustomBanner className={"fill-dark animate-spin-slow dark:fill-light"}/>
            <Link href="mailto:dbt2700@gmail.com" className='flex items-center justify-center text-lg
             absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md
             border border-solid border-dark w-28 h-28 rounded-full font-semibold hover:bg-light hover:text-dark
             hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
             md:w-12 md:h-12 md:text-[10px]'
            >
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe
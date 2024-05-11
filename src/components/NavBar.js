import React from 'react';
import Link from 'next/link'
import Logo from './Logo'
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

//Using a custom link for some reason (would just be easier if Link was directly used but this is "prettier")
const CustomLink = ({href, title, className=""}) => {
    const router = useRouter(); //saves data about user (what page they are on etc.)

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5 dark:bg-light
            group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

//Constant navigation bar on the top of the page
const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/articles" title="Articles" className='ml-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://twitter.com" target={"_blank"} 
                whileHover={{y:-2}}
                className="w-6 mr-3"
                whileTap={{scale:0.9}}
                ><TwitterIcon /></motion.a>

                <motion.a href="https://github.com/danielt270" target={"_blank"} 
                whileHover={{y:-2}}
                className="w-6 mx-3"
                whileTap={{scale:0.9}}
                ><GithubIcon /></motion.a>

                <motion.a href="https://www.linkedin.com/in/daniel-thomas-97b481214/" target={"_blank"} 
                whileHover={{y:-2}}
                className="w-6 mx-3"
                whileTap={{scale:0.9}}
                ><LinkedInIcon /></motion.a>

                <motion.a href="https://tryhackme.com/p/FaygoVibes" target={"_blank"} 
                whileHover={{y:-2}}
                className="w-6 ml-3"
                whileTap={{scale:0.9}}
                ><PinterestIcon /></motion.a>

                <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} 
                className={`ml-3 flex items-center justify-center rounded-full p-1 
                ${mode === "light" ? "bg-dark text-light" : 'bg-light text-dark'}`}>
                {   
                    mode === 'dark' ? 
                    <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />
                }
                </button>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
/*
TODO:
CHANGE PINTREST IMAGE TO THM
*/
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/my-pfp.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);                   //gets information about what user is viewing
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once:true});          //this hook allows us to run the animation when the animation is in view
    
    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change",(latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
    
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>DT | About Page</title>
            <meta name="description" content="Learn more about me, including my background, experience, and interests in cybersecurity and nuclear engineering." />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75 '>About Me</h2>
                        <p className='font-medium text-xl'>
                            Hello! I'm Daniel Thomas, a Purdue University student majoring in Cybersecurity and Nuclear Engineering. My academic journey is fueled by a fascination with the invisible forces that shape our world and the digital systems that drive it.
                        </p>            
                        <p className='my-4 font-medium text-xl'>
                            Both of my majors require visualizing complex concepts to solve real-world problems. In Cybersecurity, I protect the architecture of digital systems, while in Nuclear Engineering, I harness atomic energy safely and efficiently. My participation in Purdue's b01lers Capture The Flag team, alongside practical experiences as an IT Junior Associate and engineering intern, has sharpened my skills in securing and managing sophisticated systems.
                        </p>
                        <p className='font-medium text-xl'>
                            Certified in CompTIA Security+ and trained at UC Irvine’s Cybersecurity Bootcamp, I am equipped with robust knowledge in security control frameworks and response strategies. I’m passionate about merging my dual interests to innovate in both digital security and nuclear technology.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid 
                    border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={profilePic} alt="DT" className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={40} /> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={6} /> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>CTF Tournaments</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={4} /> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experience</h2>
                        </div>
                    </div>
                </div> 
                <div>
                    <Skills />
                    <Experience />
                    <Education />
                </div> 
            </Layout>   
        </main>
    </>
  )
}

export default about
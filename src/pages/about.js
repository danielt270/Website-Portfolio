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
            <meta name="description" content="description goes here..." />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                        <p className='font-medium'>
                            Hi, I'm blah blah blah
                        </p>            
                        <p className='my-4 font-medium'>
                            blah blah blah
                        </p>
                        <p className='font-medium'>
                            yippity yap yap
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid 
                    border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={profilePic} alt="DT" className='w-full h-auto rounded-2xl' />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={40} /> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={6} /> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>CTF Tournaments</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={4} /> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Years of experience</h2>
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
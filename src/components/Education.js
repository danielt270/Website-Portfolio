import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, duration, place, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>{type}</h3>
                <span className='capitalize font-medium text-dark/75'>{duration} | {place}</span>
                <p className='font-medium w-full'>{info}</p>
            </motion.div>
        </li>
    )
}


const Education = () => {
    //this hook will monitor the scroll
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "center .4"]
    }
  )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                type="High School Diploma"
                duration="2022-Present"
                place="JSerra Catholic High School"
                info="Relevant courses include..." />
                <Details 
                type="General Studies"
                duration="2020-2022"
                place="Saddleback College"
                info="Relevant courses include..." />
                <Details 
                type="B.S. Cybersecurity and Information Technology"
                duration="2022-Present"
                place="Purdue University"
                info="Relevant courses include..." />
                <Details 
                type="B.S. Nuclear Engineering"
                duration="2022-Present"
                place="Purdue University"
                info="Relevant courses include..." />
            </ul>
        </div>
    </div>
  )
}

export default Education
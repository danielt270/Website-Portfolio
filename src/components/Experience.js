import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, duration, address, work}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
                target="_blank"
                className="text-primary capitalize"
                >@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>{duration} | {address}</span>
                <p className='font-medium w-full'>{work}</p>
            </motion.div>
        </li>
    )
}


const Experience = () => {
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
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position="IT Intern" company="AMPAM Parks Mechanical" duration="Jun 2023 - Aug 2023" address="17036 Avalon Blvd, Carson, CA 90746"
                companyLink="https://www.ampam.com" work="Assisted in assuring integrity of IT systems including computer infrastructure and software, 
                servers, firewalls, storage, operating system and virtualization"/>
                <Details position="IT Intern" company="AMPAM Parks Mechanical" duration="Jun 2023 - Aug 2023" address="17036 Avalon Blvd, Carson, CA 90746"
                companyLink="https://www.ampam.com" work="Assisted in assuring integrity of IT systems including computer infrastructure and software, 
                servers, firewalls, storage, operating system and virtualization"/>
                <Details position="IT Intern" company="AMPAM Parks Mechanical" duration="Jun 2023 - Aug 2023" address="17036 Avalon Blvd, Carson, CA 90746"
                companyLink="https://www.ampam.com" work="Assisted in assuring integrity of IT systems including computer infrastructure and software, 
                servers, firewalls, storage, operating system and virtualization"/>
                <Details position="IT Intern" company="AMPAM Parks Mechanical" duration="Jun 2023 - Aug 2023" address="17036 Avalon Blvd, Carson, CA 90746"
                companyLink="https://www.ampam.com" work="Assisted in assuring integrity of IT systems including computer infrastructure and software, 
                servers, firewalls, storage, operating system and virtualization"/>
            </ul>
        </div>
    </div>
  )
}

export default Experience
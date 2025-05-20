import React from 'react'
import { hero } from '../data'
import { motion } from "motion/react"

import Stats from '../components/Stats'

const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section
      className='h-[850px] w-full bg-hero  bg-cover, bg-no-repeat
     text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28
     text-center'>
      <div className='container mx-auto '>

        {/* title */}
        <motion.h1
        initial={{ scale: 0 }} animate={{ scale: 1 }}
          className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px]
        lg:leading-tight lg:max-w-[880px]'
        >{title}</motion.h1>

        {/* subtitle */}
        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'
        >
          {subtitle}
        </motion.h2>

        {/* button cta */}
        <motion.button
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.5}}
        className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)]
        px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition
        lg:px-[80px] lg:py-[16px] lg:mb-[194px]
        '
        >
          {buttonText}
        </motion.button>

        {/* start */}
        <motion.div
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.9}}
        >
          <Stats/>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
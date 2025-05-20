import React from 'react'
import { motion } from "motion/react"

import {newsletter} from "../data"

const Newsletter = () => {
  const { title, subtitle, placeholder, buttonText} = newsletter;
  return (
    <motion.section id='contact' className='section bg-newsletter min-h-[490px]'
     initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.2}}
    >
      <div className="container mx-auto flex justify-center lg:justify-end">
        <div className='w-full max-w-[558px] text-center text-white lg:text-left'>
          <h2 className='text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal ' >{title}</h2>
          <p className='text-xl font-light mb-10'>{subtitle}</p>
          <div className='flex flex-col lg:flex-row gap-[22px]'>
            <motion.input 

             initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.4}}
            className='h-[60px] px-6 outline-none placeholder:text-gray-400 rounded-lg lg:flex-1 text-gray-600'
            type="text"
            placeholder={placeholder}
            />
            <motion.button className='bg-primary h-[60px] hover:bg-slate-900 px-7 rounded-lg font-medium text-xl transition'
             initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
            >{buttonText}</motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Newsletter
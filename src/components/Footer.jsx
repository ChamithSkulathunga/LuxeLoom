import React from 'react'
import { motion } from "motion/react"
import Logo from '../assets/img/logo.png'

import { footer  } from '../data'
const Footer = () => {
  return (
    <motion.footer className='section bg-primary text-white'
     initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.4}}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between 
        border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <a className='mb-6 lg:mb-0' href="/">
            <img src={Logo} alt=''/>
          </a>
          <div className='flex gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition' key={index}>
                  <a href="/">{item.icon}</a>
                </div>
              )
            })}
          </div>
        </div>
        <p className='text-center'>
          &copy; LuxeLoom 2022 - All rights reserved
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
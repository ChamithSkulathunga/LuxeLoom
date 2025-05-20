import React from 'react'
import { newInStore } from '../data'
import { motion } from "motion/react"

import NewItemsSlider from './NewItemsSlider'

const NewItems = () => {

  const { title, subtitle, link, icon } = newInStore;

  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:relative'>
          {/* text */}
          <div className='flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0'
          
          >
            <motion.h2
            initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.6}}
              className='title max-w-[245px] lg:mt-[30px] lg:mb-[90px]  '
            >{title}</motion.h2>
            <motion.p
            initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.7}}
              className='max-w-[245px] lg:mb-12 text-justify'
            >{subtitle}</motion.p>
            <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.9 }}
              className='hidden lg:flex items-center'
            >
              <a className='hover:border-b border-primary lg:items-center font-medium transition-all'
                href="/">{link}</a>
              <div className='text-3xl'>{icon}</div>
            </motion.div>
          </div>
          {/* slider */}
          <motion.div className='lg:max-w-[800px] xl:max-w-[990px]  lg:absolute lg:-right-24'
          initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.9}}
          >
            <NewItemsSlider />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewItems
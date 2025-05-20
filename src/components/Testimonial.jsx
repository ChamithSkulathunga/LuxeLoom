import React from 'react'
import { motion } from "motion/react"


import TestimonialSlider from '../components/TestimonialSlider'
import { testimonial } from '../data'

const Testimonial = () => {
  const { image, title} = testimonial;
  return (
    <section className='section'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
          <motion.div className='lg:max-w-[50%]'
           initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.2}}
          >
            <h2 className='title mb-9'>{title}</h2>

            <TestimonialSlider/>
          </motion.div>
          <motion.div className='order-1'
           initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.4}}
          >
            <img src={image.type} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
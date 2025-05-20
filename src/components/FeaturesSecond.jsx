import React from 'react'
import { features } from '../data'
import { motion } from "motion/react"

const FeaturesSecond = () => {
   // destuecture features
    const { title, subtitle, image,  } = features.feature2; 
  return (
      <section className='section'>
     <div className='container mx-auto'>
       <div className='flex flex-col justify-center items-center lg:flex-row lg:gap-x-[100px]'>
       
           {/* image */}
        <motion.div className='flex-1  mb:order-1 mb-10 mb:mb-0'
         initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.2}}
        >
          <img src={image.type} alt='' />
        </motion.div>

        {/* text */}
        <motion.div className='flex-1   flex flex-col justify-end'
         initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.4}}
        >
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>

          
         

        </motion.div>

      </div>
     </div>
    </section>
  )
}

export default FeaturesSecond
import React from 'react'
import { features } from '../data'
import { motion } from "motion/react"

const Features = () => {

  // destuecture features
  const { title, subtitle, image, items} = features; 

  return (
    <section id="features" className='section'
    
    >
     <div className='container mx-auto'>
       <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
        {/* image */}
        <motion.div className='flex-1 order-1 lg:-order-1'
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.2}}
        >
          <img src={image.type} alt=''
           
          />
        </motion.div>

        {/* text */}
        <motion.div className='flex-1 flex flex-col justify-end'
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.3}}
        >
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>
          
          {/* items */}
          <motion.div
          initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.6}}
          >
            {items.map((item, index) => {
                // destructure items
                const {title, subtitle, icon} = item;
                return(
                  <div key={index} className='flex mb-6 lg:last:mb-0'>
                    <div className='text-2xl mr-4 lg:text-3xl' >{icon}</div>
                    <div>
                      <h4 className='text-base lg:text-xl font-semibold mb-3'>{title}</h4>
                      <p>{subtitle}</p>
                     
                    </div>
                  </div>
                )
            })}
          </motion.div>

        </motion.div>

      </div>
     </div>
    </section>
  )
}

export default Features
import React from 'react'
import { motion } from "motion/react"

import { products } from '../data'

import ProductSlider from '../components/ProductSlider'

const Products = () => {
  const {title, subtitle} = products;
  return (
    <motion.section id='Products' className='section text-center'
     initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.9, delay: 0.4}}
    >
      <div className='container mx-auto'>
        <div>
          <h2 className='title'>{title}</h2>
          <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px] '>{subtitle}</p>
        </div>

        {/* slider */}
        <ProductSlider/>

      </div>
    </motion.section>
  )
}

export default Products
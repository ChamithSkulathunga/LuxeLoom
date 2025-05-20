import React from 'react'
import { navigation } from '../data'

const NavMobile = ({closeMobileNav }) => {
  return (
    <div  className=' w-full h-full shadow-2xl bg-accent '
    // style={{ backgroundImage: "url('/pattern.jpg')", backgroundRepeat: 'repeat' }}
    >
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'> 
        {navigation.map((item, index) => {
        return (
          <li key={index}>
              <a onClick={closeMobileNav} className='text-xl font-medium capitalize text-white hover:border-b transition-all' href={item.href} >{item.name}</a>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default NavMobile
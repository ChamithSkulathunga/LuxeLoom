import React, { useEffect, useState } from 'react'
import Logo from '../assets/img/logo.svg'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { navigation } from '../data'
import NavMobile from './NavMobile'

const Header = () => {
  const [bg, setBg] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBg(true)
      } else {
        setBg(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-200 ${
        bg ? 'bg-primary py-4 lg:py-6' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img className="h-6 lg:h-8" src={Logo} alt="LuxeLoom Logo" />
          </a>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    className="capitalize text-white hover:border-b transition-all"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={`${
              mobileNav ? 'left-0' : '-left-full'
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

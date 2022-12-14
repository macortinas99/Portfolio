import Link from 'next/link'
import NavMenuIcon from '../assets/img/NavMenuIcon.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Link as Scroll } from 'react-scroll'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState()
  useEffect(() => {
    if (global.width < 600) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  const toggleHamburgerMenu = () => {
    let navbarContainer = document.getElementById('navbar-container')
    // let overlay = document.getElementById('body')

    if (!isActive) {
      // navbarContainer.style.left = '75px'
      // navbarContainer.style.right = '0px'
      navbarContainer.style.width = '300px'
      navbarContainer.style.height = '100vh'
      navbarContainer.style.fontSize = '1.875rem'
    }
    if (isActive) {
      // navbarContainer.style.left = '100%'
      // navbarContainer.style.right = '-56px'
      navbarContainer.style.width = '0px'
      navbarContainer.style.height = '0px'
      navbarContainer.style.fontSize = '0px'
    }
    setIsActive(!isActive)
  }

  const [path, setPath] = useState()
  useEffect(() => {
    setPath(window.location.pathname)
    console.log(path)
  }, [path])

  return (
    <div className='font-barcode xs:text-3xl sm:text-3xl text-4xl z-20 top-0 w-screen xs:h-14 h-20 fixed bg-navyBlue'>
      <div className='flex text-gold '>
        <Link href='/'>
          <p className='font-logo mt-5 ml-5 animate-pulse xs:text-xl'>MAC</p>
        </Link>
        <div
          id='navbar-container'
          className='transition-all xs:z-40 flex xs:text-0 xs:text-3xl sm:text-3xl text-4xl xs:right-0 right-6 lg:mr-10 xs:mt-0 mt-6 xs:space-x-0 space-x-5 xs:bg-black xs:w-0 xs:h-screen h-24 fixed'
        >
          <div className='xs:ml-6 xs:space-y-4 xs:mt-6 flex xs:flex-col sm:space-x-4 md:space-x-4 lg:space-x-4'>
            <Link href='/'>
              <div className='barcode-scanner'>
                <div className='scanner'></div>
                <p>Home</p>
              </div>
            </Link>

            {path === '/' && screen.width < 574 && (
              <Scroll to='about-me-container' spy={true} smooth={true} offset={-150}>
                <div className='barcode-scanner' onClick={() => toggleHamburgerMenu()}>
                  <div className='scanner'></div>
                  <p>About</p>
                </div>
              </Scroll>
            )}
            {path === '/' && (
              <Scroll to='about-me-container' spy={true} smooth={true} offset={-150}>
                <div className='barcode-scanner'>
                  <div className='scanner'></div>
                  <p>About</p>
                </div>
              </Scroll>
            )}

            <Link href='/Resume'>
              <div className='barcode-scanner'>
                <div className='scanner'></div>
                <p>Resume</p>
              </div>
            </Link>
            <Link href='/Contact'>
              <div className='barcode-scanner'>
                <div className='scanner'></div>
                <p>Contact Me</p>
              </div>
            </Link>
          </div>
        </div>

        <div className='three col absolute xs:z-40 xs:top-2 xs:right-0 sm:hidden md:hidden lg:hidden'>
          <div className={isActive ? 'hamburger is-active' : 'hamburger'} id='hamburger-11' onClick={() => toggleHamburgerMenu()}>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

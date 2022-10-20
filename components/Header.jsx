import Link from 'next/link'
import NavMenuIcon from '../assets/img/NavMenuIcon.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  // if (screen.width < 560) {
  //   showHamburger = true
  // }
  // if (screen.width < 560) {
  //   showHamburger = false
  // }

  const toggleHamburgerMenu = () => {
    let navbarContainer = document.getElementById('navbar-container')
    let overlay = document.getElementById('body')

    if (!isActive) {
      navbarContainer.style.left = '75px'
      navbarContainer.style.right = '0px'
    }
    if (isActive) {
      navbarContainer.style.left = '100%'
      navbarContainer.style.right = '-56px'
    }
    setIsActive(!isActive)
  }

  return (
    <div className='font-barcode sm:text-3xl text-4xl absolute z-10 top-0 w-screen '>
      <div className='flex text-gold '>
        <p className='font-logo mt-5 ml-5 animate-pulse'>MAC</p>
        {/* {showHamburger && ( */}
        <div
          id='navbar-container'
          className='transition-all	flex absolute xs:-right-56 xs:left-screen right-6 lg:mr-10 xs:mt-0 mt-6 xs:space-x-0 space-x-5 xs:flex-col xs:bg-black xs:h-screen'
        >
          <div className='xs:ml-6 xs:space-y-4 xs:mt-6'>
            <Link href='/'>
              <div className='barcode-scanner'>
                <div className='scanner'></div>
                <p>Home</p>
              </div>
            </Link>
            <Link href='/About'>
              <div className='barcode-scanner'>
                <div className='scanner'></div>
                <p>About</p>
              </div>
            </Link>
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
        {/* )} */}

        <div className='three col absolute z-20 xs:top-2 xs:right-0'>
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

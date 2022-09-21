import Link from 'next/link'
import NavMenuIcon from '../assets/img/NavMenuIcon.svg'
import Image from 'next/image'

const Header = () => {
  let showHamburger = false
  // if (screen.width < 560) {
  //   showHamburger = true
  // }
  // if (screen.width < 560) {
  //   showHamburger = false
  // }
  return (
    <div className='font-barcode text-4xl absolute z-10 top-0 lg:w-screen '>
      <div className='flex text-gold justify-between'>
        <p className='font-logo mt-5 ml-5 animate-pulse'>MAC</p>
        {showHamburger && (
          <div className='flex lg:mr-10 mt-6 space-x-5 xs:opacity-0'>
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
        )}
        {!showHamburger && (
          <div>
            <Image src={NavMenuIcon} alt='' className='xs:absolute' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header

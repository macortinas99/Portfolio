import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ResumeScreenshot from '../public/ResumePage/ResumeScreenshot.png'
// import PDF from '../public/ResumePage/Resume.pdf'
import Link from 'next/link'

function Resume() {
  return (
    <div>
      <Header />
      <div className=''>
        <p className='projects-title text-6xl xs:text-5xl lg:text-7xl text-gold font-barcode xs:mt-40 mt-36 mb-24 flex justify-center'>Resume</p>
        <div className='mx-auto md:w-20% lg:w-10%'>
          <a href={'/ResumePage/Resumse.pdf'} target='_blank' rel='noreferrer' download>
            <p className='text-gold lg:text-xl underline underline-offset-2 mb-8 hover:text-teal flex justify-center lg:w-100%'>Download Resume</p>
          </a>
        </div>
        <div className='flex justify-center'>
          <Image src={ResumeScreenshot} alt='' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Resume

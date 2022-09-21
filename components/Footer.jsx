import Image from 'next/image'
import React from 'react'
import Github from '../assets/img/Github.svg'
import LinkedIn from '../assets/img/LinkedIn.svg'

const Footer = () => {
  return (
    <div className='text-teal text-6l font-code flex justify-center py-3'>
      <div className='flex-col'>
        <p>Designed & Built by Matthew Cortinas</p>
        <div className='flex justify-center gap-2'>
          <a href='https://github.com/macortinas99' target='_blank' rel='noreferrer'>
            <Image src={Github} width={30} height={30} alt='' />
          </a>
          <a href='https://www.linkedin.com/in/matthew-cortinas-734137232/' target='_blank' rel='noreferrer'>
            <Image src={LinkedIn} width={30} height={30} alt='' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

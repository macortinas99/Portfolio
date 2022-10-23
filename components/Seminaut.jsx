import React from 'react'
import Image from 'next/image'

// Guild Gaming Images
import GuildGoldLogo from '../assets/img/GuildGaming/GuildGamingLogoGoldBg.png'
import GuildMap1 from '../assets/img/GuildGaming/MapMultiplePins.PNG'

export default function Seminaut() {
  return (
    <div>
      <div>
        <p
          id='seminaut-title'
          className='projects-title text-6xl xs:text-5xl lg:text-7xl text-gold font-barcode xs:mt-40 mt-96 mb-24 flex justify-center opacity-0'
        >
          Seminaut Inc.
        </p>
        <Image src={GuildGoldLogo} alt='' id='Guild-logo-img' className='z-10' />
      </div>
      <div>
        <div className='xs:w-90% xs:mx-auto'>
          <p className='text-gold font-code xs:text-2xl xs:my-2'>About Guild Gaming</p>
          <p className='text-gold font-code xs:text-sm xs:mb-2'>
            Guild Gaming is a subsidiary of Seminaut Inc. Here at The Guild, users can find connect with other local players in the area. Gaming
            venues and events are registered on The Guild and the website serves as a community driven website where people can come together and do
            what they love!
          </p>
        </div>
        <Image src={GuildMap1} alt='' className='z-10' />
        <div className='xs:w-90% xs:mx-auto'>
          <p className='text-gold font-code xs:text-2xl xs:my-2'>The Map Team</p>
          <p className='text-gold font-code xs:text-sm'>My primary contributions towards The guild are within the live map page.</p>
        </div>
      </div>
    </div>
  )
}

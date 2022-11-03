import React from 'react'
import Image from 'next/image'

// Guild Gaming Images
import GuildGoldLogo from '../assets/img/GuildGaming/GuildGamingLogoGoldBg.png'
import GuildLogoBadge from '../assets/img/GuildGaming/GuildLogo2.png'
import GuildMap1 from '../assets/img/GuildGaming/MapMultiplePins.PNG'
import AutoFillImage from '../assets/img/GuildGaming/AutoFillImage.PNG'
import SidePanelImage1 from '../assets/img/GuildGaming/SidePanelImg1.PNG'
import SidePanelImage2 from '../assets/img/GuildGaming/SidePanelImg2.PNG'
import SidePanelImage3 from '../assets/img/GuildGaming/SidePanelImg3.PNG'
import AutocompleteBar from '../assets/img/GuildGaming/AutocompleteSearchBar.PNG'
import MapSnippet1 from '../assets/img/GuildGaming/MapSnippet1.PNG'

import { useState, useEffect } from 'react'

export default function Seminaut() {
  const [isMobile, setIsMobile] = useState()
  useEffect(() => {
    if (screen.width < 600) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])
  return (
    <div>
      <div>
        <p
          id='seminaut-title'
          className='projects-title text-6xl xs:text-5xl lg:text-7xl text-gold font-barcode xs:mt-40 mt-96 mb-24 flex justify-center opacity-0'
        >
          Seminaut Inc.
        </p>
        <Image src={GuildGoldLogo} alt='' id='Guild-logo-img' className='z-10' />}
      </div>
      <div>
        <div className='xs:w-90% xs:mx-auto'>
          <p className='text-gold font-bold font-code xs:text-2xl xs:my-2'>About Guild Gaming</p>
          <p className='text-gold font-code xs:text-sm xs:mb-2'>
            Guild Gaming is a subsidiary of Seminaut Inc. Here at The Guild, users can find connect with other local players in the area. Gaming
            venues and events are registered on The Guild and the website serves as a community driven website where people can come together and do
            what they love!
          </p>
        </div>
        {isMobile && <Image src={GuildMap1} alt='' className='z-10' height={1200} />}
        {!isMobile && <Image src={GuildMap1} alt='' className='z-10' />}

        <div className='xs:w-90% xs:mx-auto'>
          <p className='text-gold font-bold font-code xs:text-2xl xs:my-2'>The Map Team</p>
          <p className='text-gold font-code xs:text-sm'>
            My primary contributions towards The guild are within the live map page. I was given more responsibility and chosen to lead the Map Team
            with my own team of 6 interns. I was also promoted to a senior frontend developer.
          </p>
        </div>
        <div className='xs:mt-6'>
          <div className='flex xs:w-90% xs:mx-auto'>
            <p className='text-gold font-code font-bold xs:text-3xl xs:w-60% xs:my-2'>Acheiving our first 100 users!</p>
            {isMobile && <Image src={GuildLogoBadge} alt='' height={150} width={150} className='z-10' />}
          </div>
          <div className='xs:w-100% xs:mx-auto'>
            <p className='text-gold font-code xs:mt-8 xs:text-sm'>
              By adding some key features I was able to help The Guild achieve it's first 100 users and help get it's first 10 venues registered on
              the website!
            </p>
            <div>
              {/* Feature 1 */}
              <div className='flex font-code z-10 xs:mt-6 xs:w-100% xs:h-28 bg-lightBlack xs:border-gold xs:border-y-2'>
                <div className='xs:w-90% xs:mx-auto xs:flex'>
                  <span className='text-teal xs:text-4xl xs:my-auto'>01.</span>
                  <span className='text-gold xs:text-xl xs:ml-2 xs:my-auto uppercase'>Auto populating live map with events and venues</span>
                </div>
              </div>
              <p className='xs:w-90% xs:mx-auto text-teal font-code xs:my-4'>
                Using API calls to the backend, events and venues are the inserted on the map using Mapbox GL API creating a live interactive map like
                Google Maps.
              </p>
              <Image src={AutoFillImage} alt='' width={400} height={250} className='z-10' />

              {/* Feature 2 */}
              <div className='flex font-code z-10 xs:mt-6 xs:w-100% xs:h-28 bg-lightBlack xs:border-gold xs:border-y-2'>
                <div className='xs:w-90% xs:mx-auto xs:flex'>
                  <span className='text-teal xs:text-4xl xs:my-auto'>02.</span>
                  <span className='text-gold xs:text-xl xs:ml-2 xs:my-auto uppercase'>
                    Side Panel feature allowing more friendly UX/UI experience
                  </span>
                </div>
              </div>
              <p className='xs:w-90% xs:mx-auto text-teal font-code xs:my-4'>
                The side panel is filled with event's/venues that the user can scroll through. If a card is clicked on it will re-center the map. The
                side panel gives the user the ability to use a lot of the sites function within the map page. The user can register for an event,
                share an event and visit the event details page. If a venue icon or card is clicked on it will show the details of that venue within
                the side panel.
              </p>
              <Image src={SidePanelImage3} alt='' width={400} height={700} className='z-10' />

              <Image src={SidePanelImage2} alt='' width={400} height={700} className='z-10' />

              {/* Feature 3 */}
              <div className='flex font-code z-10 xs:mt-6 xs:w-100% xs:h-28 bg-lightBlack xs:border-gold xs:border-y-2'>
                <div className='xs:w-90% xs:mx-auto xs:flex'>
                  <span className='text-teal xs:text-4xl xs:my-auto'>03.</span>
                  <span className='text-gold xs:text-xl xs:ml-2 xs:my-auto uppercase'>Autocomplete search bar for location searching</span>
                </div>
              </div>
              <p className='xs:w-90% xs:mx-auto text-teal font-code xs:my-4'>
                Using Mapbox GL API I implemented a autocomplete location search bar. Using this search bar users can locate venues and event's in
                popular cities easier.
              </p>
              <Image src={AutocompleteBar} alt='' width={400} height={300} className='z-10' />

              {/* Feature 4 */}
              <div className='flex font-code z-10 xs:mt-6 xs:w-100% xs:h-28 bg-lightBlack xs:border-gold xs:border-y-2'>
                <div className='xs:w-90% xs:mx-auto xs:flex'>
                  <span className='text-teal xs:text-4xl xs:my-auto'>04.</span>
                  <span className='text-gold xs:text-xl xs:ml-2 xs:my-auto uppercase'>Live Map Snippets on Event/Venue Detail Pages</span>
                </div>
              </div>
              <p className='xs:w-90% xs:mx-auto text-teal font-code xs:my-4'>
                I embedded live maps using Mapbox GL API within the event/venue detail pages as small snippets.
              </p>
              <Image src={MapSnippet1} alt='' width={400} height={300} className='z-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

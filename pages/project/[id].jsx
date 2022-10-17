import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Header from '../../components/Header'
import StateContext from '../../context/StateContext'
// Image slider
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Footer from '../../components/Footer'

export default function ProjectDetails() {
  const router = useRouter()
  const ID = router.query.id
  let projectNum = 'project' + [ID]

  const { project1, project2, project3 } = useContext(StateContext)

  if (projectNum == 'project1') {
    projectNum = project1
  }
  if (projectNum == 'project2') {
    projectNum = project2
  }
  if (projectNum == 'project3') {
    projectNum = project3
  }

  const { title, description, image, website, github, id } = projectNum

  return (
    <div>
      <Header />
      <div className='mx-auto mb-20 lg:mt-48 lg:w-50% bg-lightBlack rounded-lg p-16 gold-glow font-code'>
        <div className='flex '>
          <div className='lg:w-60% mr-6 '>
            <p className='lg:text-4xl font-code lg:mb-6 text-gold'>{title}</p>
            <div className='border-2 border-gold rounded-lg'>
              <Slide>
                {image?.map((image, index) => (
                  <div className='slide' key={index}>
                    <div className='rounded-lg bg-cover' style={{ backgroundImage: `url(${image})`, height: '300px' }}></div>
                  </div>
                ))}
              </Slide>
            </div>
            <p className='text-gold mt-2 text-xl font-code underline underline-offset-2'>Description:</p>
            <p className='text-gray'>{description}</p>
          </div>
          <div className=' lg:w-30% h-450 pl-6 border-l-2 border-amber-900'>
            <div>
              <p className='text-gold text-xl underline underline-offset-2'>Skills Used</p>

              <div className='text-gray font-code'>
                <li>Deskilling</li>

                <li>DISCO - European Dictionary of Skills and Competences</li>

                <li>Dreyfus model of skill acquisition</li>

                <li>Forecast skill</li>

                <li>Game of skill</li>
              </div>
            </div>
          </div>
        </div>
        <video className='w-100% mt-12 mx-auto max-w-none ' src='/EcommerceVideo.mp4' type='video/mp4' muted autoPlay loop></video>
      </div>
      <Footer />
    </div>
  )
}

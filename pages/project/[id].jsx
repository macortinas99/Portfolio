import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Header from '../../components/Header'
import StateContext from '../../context/StateContext'
// Image slider
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default function ProjectDetails() {
  const router = useRouter()
  const ID = router.query.id
  console.log('hello')
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
  console.log(image)

  return (
    <div>
      <Header />
      <div className='flex mx-auto lg:mt-48 lg:w-50% bg-lightBlack rounded-lg p-12 gold-glow'>
        <div className='lg:w-60% mr-6 '>
          <p className='lg:text-4xl font-code underline underline-offset-8	 lg:mb-6 text-gold'>{title}</p>
          <div className=''>
            <Slide>
              {image?.map((image, index) => (
                <div className='slide' key={index}>
                  <div className='' style={{ backgroundImage: `url(${image.url})`, height: '300px' }}>
                    <span>{image.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
          <p className='text-gray'>{description}</p>
          <p>VIDEO Overlay</p>
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
          <div className='text-gold text-xl underline underline-offset-2'>Key Take aways</div>
        </div>
      </div>
    </div>
  )
}

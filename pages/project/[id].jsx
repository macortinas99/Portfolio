import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Header from '../../components/Header'
import StateContext from '../../context/StateContext'
import Github from '/assets/img/Github.svg'
import Website from '/assets/img/WebsiteIcon.png'
import Link from 'next/link'

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

  const { title, description, image, video, website, github, id, skills } = projectNum
  console.log(video)
  return (
    <div>
      <Header />
      {projectNum && (
        <div className='mx-auto mb-20 xs:mt-24 sm:mt-36 md:mt-40 lg:mt-48 xs:w-90% sm:w-80% md:w-70% lg:w-50% bg-lightBlack rounded-lg xs:p-6 p-16 gold-glow font-code'>
          <div className='flex xs:flex-col'>
            <div className='xs:w-100% sm:w-60% md:w-60% lg:w-60% mr-6 '>
              <p className=' xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-code lg:mb-6 text-gold'>{title}</p>
              <div className='xs:mb-4 lg:mb-2 flex gap-2'>
                {github && (
                  <Link href={github}>
                    <a target='_blank'>
                      <Image src={Github} alt='' width={30} height={30} className='lg:hover:scale-125' />
                    </a>
                  </Link>
                )}

                {website && (
                  <Link href={website}>
                    <a target='_blank'>
                      <Image src={Website} alt='' width={30} height={30} className='lg:hover:scale-110' />
                    </a>
                  </Link>
                )}
              </div>
              <div className='border-2 border-gold rounded-lg'>
                {image && (
                  <Slide>
                    {image?.map((image, index) => (
                      <div className='slide' key={index}>
                        <div className='rounded-lg bg-cover' style={{ backgroundImage: `url(${image})`, height: '300px' }}></div>
                      </div>
                    ))}
                  </Slide>
                )}
              </div>
              <p className='text-gold mt-2 text-xl font-code underline underline-offset-2'>Description:</p>
              <p className='text-gray xs:mb-10'>{description}</p>
            </div>
            <div className='xs:w-100% w-40% xs:h-100% h-450 xs:pl-0 pl-6 xs:border-0 border-l-2 border-amber-900'>
              <div>
                <p className='text-gold text-xl underline underline-offset-2'>Skills Used</p>

                <div className='text-gray font-code'>
                  {skills?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {video && <p className='text-gold text-xl mt-6 flex justify-center underline underline-offset-2'>Live Video Demo</p>}
          <video className='w-100% mt-6 mx-auto max-w-none border-2 border-gold ' src={video} type='video/mp4' muted autoPlay loop controls></video>
        </div>
      )}
      <Footer />
    </div>
  )
}

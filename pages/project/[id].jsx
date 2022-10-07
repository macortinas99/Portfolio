import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Header from '../../components/Header'
import StateContext from '../../context/StateContext'

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
  console.log(projectNum)
  const { title, description, image, website, github, id } = projectNum

  return (
    <div>
      <Header />
      <div className='flex justify-center lg:mt-48 lg:w-100%'>
        <div className='lg:w-30% bg-red'>
          <p className='lg:text-4xl font-code underline underline-offset-8	 lg:mb-6 text-gold'>{title}</p>
          <Image src={image} alt='' width={500} height={300} />
          <p>{description}</p>
          <p>VIDEO Overlay</p>
        </div>
        <div className='bg-white lg:w-72'>
          <div>SKILLS used for this project</div>
          <div className='bg-orange-600'>KEY Take aways</div>
        </div>
      </div>
    </div>
  )
}

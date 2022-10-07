import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useContext } from 'react'
// import { useContext } from 'react'
import Header from '../../components/Header'
import StateContext, { useStateContext } from '../../context/StateContext'

export default function ProjectDetails() {
  const router = useRouter()
  const ID = router.query.id
  console.log('hello')

  const { projects } = useContext(StateContext)
  let project = projects[ID]
  console.log(project)

  return (
    <div>
      <Header />
      <div className='flex lg:ml-20% lg:mt-48 lg:w-100%'>
        <div className='lg:w-30% bg-red'>
          <p className='lg:text-3xl lg:mb-6 text-gold'>{project.title}</p>

          <Image src={project.image} alt='' width={500} height={300} />
        </div>
        <div className='bg-white lg:w-20%'>
          <div>SKILLS</div>
          <div className='bg-orange-600'>KEY Take aways</div>
        </div>
      </div>
    </div>
  )
}
